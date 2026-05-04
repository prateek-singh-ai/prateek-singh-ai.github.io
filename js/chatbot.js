/**
 * Prateek Singh Portfolio - AI Chatbot (Conversational)
 * Smart client-side chatbot with fuzzy matching, knowledge base,
 * context window, pronoun resolution, topic tracking, and follow-up suggestions.
 * Optional: Gemini API integration for enhanced LLM-grade responses.
 */

class PrateekChatbot {
    constructor() {
        this.isOpen = false;
        this.isTyping = false;
        this.conversationHistory = [];
        this.knowledge = typeof PRATEEK_KNOWLEDGE !== 'undefined' ? PRATEEK_KNOWLEDGE : null;
        this.geminiApiKey = null;
        this.useGemini = false;

        // ===== Conversational state =====
        this.context = [];                  // Rolling memory of recent turns
        this.contextWindow = 6;             // Keep last 6 messages
        this.currentTopic = null;           // Active intent (e.g., "waters")
        this.lastIntent = null;             // Most recent matched intent
        this.lastUserMessageAt = 0;         // For rate limiting

        // Pronouns/follow-up signals → trigger context resolution
        this.pronounPatterns = [
            /\b(he|him|his|himself)\b/i,
            /\b(it|that|this|those|these)\b/i,
            /\b(more|else|other|another|also)\b/i,
            /^(what about|how about|and|tell me more|go on|continue|explain)/i,
            /^(why|when|where|how|who)\s+(is|was|did|does)?\s*$/i
        ];

        // Topic-based follow-up chips
        this.followUpMap = {
            currentRole: ['Tell me about his AI work', 'What about the SAP automation?', 'His tech stack?'],
            waters: ['Tell me about the AI search platform', 'What about SAP automation?', 'How big is the impact?'],
            massdot: ['What happened next?', 'Tell me about LTI', 'His tech stack at MassDOT?'],
            lti: ['Tell me about South Africa', 'What did he do at Liberty Insurance?', 'His next role?'],
            southAfrica: ['Tell me about his Masters', 'Cricket in South Africa?', 'Liberty Insurance work?'],
            northeastern: ['What did he do after graduation?', 'His GPA?', 'Teaching assistant role?'],
            education: ['Tell me about Northeastern', 'His undergrad?', 'GPA details?'],
            skills: ['His AI skills?', 'Cloud experience?', 'Favorite tools?'],
            aiProjects: ['SAP automation work?', 'His tech stack?', 'Tell me about Waters'],
            automation: ['AI projects too?', 'Tell me about Waters', 'His Python skills?'],
            techStack: ['Favorite projects?', 'Cloud experience?', 'AI/ML work?'],
            projects: ['Tell me about Waters projects', 'His AI work?', 'Personal projects?'],
            tenXEngineer: ['Other personal projects?', 'His AI work at Waters?', 'Tech stack?'],
            journey: ['Tell me about South Africa', 'His current role?', 'Education journey?'],
            cricket: ['Other hobbies?', 'Tell me about him', 'His tournaments?'],
            hobbies: ['Cricket details?', 'His philosophy?', 'Fun facts?'],
            philosophy: ['His journey?', 'Career story?', 'Tell me more about him'],
            funFact: ['More fun facts?', 'His hobbies?', 'Tell me about him'],
            location: ['His journey?', 'Where has he worked?', 'Tell me about him'],
            languages: ['Tell me about him', 'His journey?', 'Fun facts?'],
            certifications: ['His education?', 'Tell me about Waters', 'His achievements?'],
            experience: ['Tell me about Waters', 'His MassDOT role?', 'LTI experience?'],
            whoIsHe: ['What does he do?', 'His skills?', 'His journey?'],
            contact: ['Download resume', 'His current role?', 'Tell me about him'],
            resume: ['Tell me about him', 'How to contact?', 'His experience?'],
            hire: ['His skills?', 'How to contact?', 'His current role?'],
            greeting: ['What does Prateek do?', 'Tell me about him', 'His AI work?'],
            offensive: ['Tell me about Prateek', 'His skills?', 'His journey?']
        };

        // Default chips when no follow-ups match
        this.defaultFollowUps = [
            'Tell me about him', 'His skills?', 'His current role?'
        ];

        this.greetings = [
            "Hey there! 👋 I'm Prateek's AI assistant. Ask me anything about his experience, skills, or journey!",
            "Hi! 👋 Welcome! I can tell you about Prateek's work, projects, or career journey. What would you like to know?",
            "Hello! 👋 I'm here to help you learn about Prateek. Feel free to ask about his skills, experience, or anything else!"
        ];

        this.fallbacks = [
            "Hmm, I'm not sure about that specific detail. Try asking about his work experience, skills, education, or projects!",
            "That's a bit outside my knowledge base. I can help with questions about Prateek's professional background, technical skills, or career journey though!",
            "I don't have information on that. But I'd love to tell you about Prateek's AI/ML work, his journey across 3 countries, or his technical expertise!",
            "I want to be honest — I don't know that. Ask me about Prateek's experience at Waters, MassDOT, LTI, or his education at Northeastern!"
        ];

        this.deflections = [
            "I appreciate the curiosity, but I don't have details on that personal matter. Let's stick to professional topics — ask me about Prateek's projects or skills!",
            "That's a bit personal and I don't have that information. How about I tell you about Prateek's work with AI and RAG systems instead?",
            "I'd rather not speculate on personal matters. But I can definitely help with questions about Prateek's career, technical skills, or achievements!"
        ];

        this.quickReplies = [
            "What does Prateek do?",
            "Tell me about his AI work",
            "What are his skills?",
            "Where has he worked?",
            "His education?",
            "Fun facts about him"
        ];

        this.init();
    }

    init() {
        this.createChatWidget();
        this.attachEventListeners();
        this.loadConversationHistory();
    }

    createChatWidget() {
        const chatWidget = document.createElement('div');
        chatWidget.id = 'chatWidget';
        chatWidget.className = 'chat-widget';
        chatWidget.innerHTML = `
            <button class="chat-toggle" id="chatToggle" aria-label="Open chat">
                <span class="chat-pulse"></span>
                <span class="chat-toggle-icon icon-chat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                </span>
                <span class="chat-toggle-icon icon-close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </span>
            </button>
            <div class="chat-window" id="chatWindow">
                <div class="chat-header">
                    <div class="chat-avatar">PS</div>
                    <div class="chat-info">
                        <div class="chat-name">Prateek's AI Assistant</div>
                        <div class="chat-status">
                            <span class="status-dot"></span>
                            <span>Online • Ask me anything</span>
                        </div>
                    </div>
                    <button class="chat-action-btn" id="chatClear" title="Clear chat" style="background:transparent;border:none;color:white;cursor:pointer;padding:6px;">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                    </button>
                </div>
                <div class="chat-messages" id="chatMessages"></div>
                <div class="quick-replies" id="chatQuickReplies"></div>
                <div class="chat-input-area">
                    <input type="text" class="chat-input" id="chatInput" placeholder="Ask about Prateek..." maxlength="500"/>
                    <button class="chat-send" id="chatSend" disabled>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="22" y1="2" x2="11" y2="13"/>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(chatWidget);

        this.elements = {
            widget: chatWidget,
            toggle: document.getElementById('chatToggle'),
            window: document.getElementById('chatWindow'),
            messages: document.getElementById('chatMessages'),
            input: document.getElementById('chatInput'),
            send: document.getElementById('chatSend'),
            clear: document.getElementById('chatClear'),
            quickReplies: document.getElementById('chatQuickReplies')
        };
    }

    attachEventListeners() {
        this.elements.toggle.addEventListener('click', () => this.toggleChat());
        this.elements.send.addEventListener('click', () => this.sendMessage());
        this.elements.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        this.elements.input.addEventListener('input', () => {
            this.elements.send.disabled = !this.elements.input.value.trim();
        });
        this.elements.clear.addEventListener('click', () => this.clearChat());
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.elements.widget.contains(e.target) && window.innerWidth <= 768) {
                this.toggleChat();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) this.toggleChat();
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        this.elements.widget.classList.toggle('active', this.isOpen);
        this.elements.toggle.setAttribute('aria-label', this.isOpen ? 'Close chat' : 'Open chat');
        if (this.isOpen) {
            if (this.conversationHistory.length === 0) this.showGreeting();
            this.elements.input.focus();
            if (this.conversationHistory.length <= 1) this.renderQuickReplies();
        }
    }

    showGreeting() {
        const greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
        this.addMessage(greeting, 'bot');
    }

    renderQuickReplies(replies = null) {
        const items = replies || this.quickReplies;
        this.elements.quickReplies.innerHTML = items
            .map(reply => `<button class="quick-reply">${this.escapeHtml(reply)}</button>`)
            .join('');
        this.elements.quickReplies.style.display = 'flex';
        this.elements.quickReplies.querySelectorAll('.quick-reply').forEach(btn => {
            btn.addEventListener('click', () => {
                this.elements.input.value = btn.textContent;
                this.elements.send.disabled = false;
                this.sendMessage();
            });
        });
    }

    async sendMessage() {
        const message = this.elements.input.value.trim();
        if (!message || this.isTyping) return;

        // Rate limiting (1 message per 800ms)
        const now = Date.now();
        if (now - this.lastUserMessageAt < 800) return;
        this.lastUserMessageAt = now;

        this.addMessage(message, 'user');
        this.elements.input.value = '';
        this.elements.send.disabled = true;
        this.elements.quickReplies.style.display = 'none';

        // Update context
        this.updateContext('user', message);

        this.showTyping();

        let response;
        if (this.useGemini && this.geminiApiKey) {
            response = await this.getGeminiResponse(message);
        } else {
            response = await this.getLocalResponse(message);
        }

        this.hideTyping();
        this.addMessage(response, 'bot');
        this.updateContext('bot', response);

        // Show contextual follow-ups
        this.showFollowUps();

        this.saveConversationHistory();
    }

    updateContext(role, text) {
        this.context.push({ role, text, time: Date.now() });
        if (this.context.length > this.contextWindow * 2) {
            this.context = this.context.slice(-this.contextWindow * 2);
        }
    }

    showFollowUps() {
        const intent = this.lastIntent;
        const suggestions = this.followUpMap[intent] || this.defaultFollowUps;
        // Small delay so it feels natural after the response
        setTimeout(() => this.renderQuickReplies(suggestions), 250);
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        const avatar = sender === 'bot' ? 'PS' : 'You';
        messageDiv.innerHTML = `
            <div class="message-avatar">${avatar}</div>
            <div class="message-content">${this.formatMessage(text)}</div>
        `;
        this.elements.messages.appendChild(messageDiv);
        this.scrollToBottom();
        this.conversationHistory.push({ sender, text, time: Date.now() });
    }

    escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    formatMessage(text) {
        // Convert URLs FIRST (before escaping), using placeholders
        const urls = [];
        text = text.replace(/(https?:\/\/[^\s]+)/g, (m) => {
            urls.push(m);
            return `__URL_${urls.length - 1}__`;
        });
        text = this.escapeHtml(text);
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        text = text.replace(/__URL_(\d+)__/g, (_, i) =>
            `<a href="${urls[+i]}" target="_blank" rel="noopener">${urls[+i]}</a>`);
        text = text.replace(/\n/g, '<br>');
        return text;
    }

    showTyping() {
        this.isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">PS</div>
            <div class="typing-indicator"><span></span><span></span><span></span></div>
        `;
        this.elements.messages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTyping() {
        this.isTyping = false;
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    scrollToBottom() {
        this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
    }

    clearChat() {
        this.conversationHistory = [];
        this.context = [];
        this.currentTopic = null;
        this.lastIntent = null;
        this.elements.messages.innerHTML = '';
        localStorage.removeItem('prateek_chat_history');
        this.showGreeting();
        this.renderQuickReplies();
    }

    saveConversationHistory() {
        const toSave = this.conversationHistory.slice(-20);
        const state = {
            messages: toSave,
            currentTopic: this.currentTopic,
            lastIntent: this.lastIntent
        };
        localStorage.setItem('prateek_chat_history', JSON.stringify(state));
    }

    loadConversationHistory() {
        try {
            const saved = localStorage.getItem('prateek_chat_history');
            if (!saved) return;
            const parsed = JSON.parse(saved);
            // Backwards-compat: old format was a plain array
            const history = Array.isArray(parsed) ? parsed : parsed.messages;
            if (!history || history.length === 0) return;

            const dayAgo = Date.now() - (24 * 60 * 60 * 1000);
            if (history[history.length - 1].time <= dayAgo) return;

            this.conversationHistory = history;
            if (!Array.isArray(parsed)) {
                this.currentTopic = parsed.currentTopic || null;
                this.lastIntent = parsed.lastIntent || null;
            }
            history.forEach(msg => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `chat-message ${msg.sender}`;
                const avatar = msg.sender === 'bot' ? 'PS' : 'You';
                messageDiv.innerHTML = `
                    <div class="message-avatar">${avatar}</div>
                    <div class="message-content">${this.formatMessage(msg.text)}</div>
                `;
                this.elements.messages.appendChild(messageDiv);
                // Rebuild context window from last few exchanges
                this.updateContext(msg.sender === 'bot' ? 'bot' : 'user', msg.text);
            });
            this.scrollToBottom();
        } catch (e) {
            console.log('Could not load chat history');
        }
    }

    // ========== LOCAL RESPONSE ENGINE (with context) ==========

    async getLocalResponse(query) {
        await this.delay(500 + Math.random() * 700);

        const normalizedQuery = query.toLowerCase().trim();

        if (this.isOffensive(normalizedQuery)) {
            this.lastIntent = 'offensive';
            this.currentTopic = null;
            const offensiveResponses = this.knowledge?.commonQuestions?.offensive;
            return offensiveResponses
                ? this.getRandomResponse(offensiveResponses)
                : "Let's keep things friendly! I'm happy to chat about Prateek's work, skills, or journey.";
        }

        if (this.shouldDeflect(normalizedQuery)) {
            this.lastIntent = null;
            return this.getRandomResponse(this.deflections);
        }

        // Resolve pronouns/follow-ups using current topic
        const resolvedQuery = this.resolveQuery(normalizedQuery);

        const result = this.findBestMatch(resolvedQuery, normalizedQuery);

        if (result) {
            this.lastIntent = result.intent;
            this.currentTopic = result.intent;
            return result.response;
        }

        this.lastIntent = null;
        return this.getRandomResponse(this.fallbacks);
    }

    /**
     * If the query contains pronouns/follow-up signals AND we have a current topic,
     * inject the topic's primary keyword to bias intent matching.
     */
    resolveQuery(query) {
        const isPronounQuery = this.pronounPatterns.some(p => p.test(query));
        if (!isPronounQuery || !this.currentTopic) return query;

        // Inject primary keyword from current topic
        const topicKeywords = this.knowledge?.keywords?.[this.currentTopic];
        if (topicKeywords && topicKeywords.length > 0) {
            return `${topicKeywords[0]} ${query}`;
        }
        return query;
    }

    shouldDeflect(query) {
        const deflectPatterns = [
            /salary|compensation|pay|money|income|earning/i,
            /girlfriend|wife|married|dating|relationship|single/i,
            /address|where.*live|home.*address|apartment/i,
            /phone.*number|call.*him|contact.*number/i,
            /age.*exact|birth.*date|birthday/i,
            /religion|political|vote|party/i,
            /visa|immigration|status|green.*card/i,
            /unpaid.*intern.*detail|what.*project.*unpaid|which.*company.*unpaid/i
        ];
        return deflectPatterns.some(pattern => pattern.test(query));
    }

    isOffensive(query) {
        const offensivePatterns = [
            /\b(fuck|fucking|fck|f\*ck|shit|sht|bitch|btch|asshole|bastard)\b/i,
            /\b(damn|crap|piss|dick|cock|pussy|cunt|whore|slut)\b/i,
            /\b(motherfucker|mf|bullshit|wtf|stfu|gtfo)\b/i,
            /\b(idiot|stupid|dumb|loser|moron|retard)\b/i,
            /\b(hate you|sucks|suck|pathetic|worthless|useless)\b/i,
            // Hindi/Urdu common ones
            /\b(chutiya|bhosdi|madarchod|behenchod|bc|mc|gandu|harami)\b/i,
            /\b(saala|kameena|kutta|kutte|randi)\b/i
        ];
        return offensivePatterns.some(p => p.test(query));
    }

    findBestMatch(query, originalQuery = null) {
        if (!this.knowledge || !this.knowledge.keywords || !this.knowledge.commonQuestions) {
            console.error('Knowledge base not loaded!');
            return null;
        }

        const keywords = this.knowledge.keywords;
        const responses = this.knowledge.commonQuestions;
        const queryWords = query.split(/\s+/);

        let bestIntent = null;
        let bestScore = 0;

        for (const intent in keywords) {
            const intentKeywords = keywords[intent];
            let score = 0;

            for (const keyword of intentKeywords) {
                const kw = keyword.toLowerCase();
                if (query.includes(kw)) score += kw.split(' ').length * 0.4;
                for (const word of queryWords) {
                    if (word === kw) score += 0.3;
                    else if (word.length > 4 && kw.length > 4 && this.levenshteinDistance(word, kw) <= 1) score += 0.15;
                }
            }

            // Topic continuity boost: if user just asked about this topic, give it a small edge
            if (intent === this.currentTopic) score += 0.15;

            if (score > bestScore) {
                bestScore = score;
                bestIntent = intent;
            }
        }

        if (bestIntent && bestScore >= 0.3 && responses[bestIntent]) {
            const responseList = responses[bestIntent];
            const response = Array.isArray(responseList)
                ? responseList[Math.floor(Math.random() * responseList.length)]
                : responseList;
            return { intent: bestIntent, response };
        }

        // Fallback to fuzzy patterns
        const fuzzy = this.fuzzySearch(originalQuery || query);
        return fuzzy ? { intent: fuzzy.intent, response: fuzzy.response } : null;
    }

    fuzzySearch(query) {
        const genericPatterns = [
            { intent: 'whoIsHe', patterns: [/who.*is|tell.*about|about.*prateek|introduce/i],
              response: "**Prateek Singh** is an AI/ML Engineer and Data Analyst with 7+ years of experience. He's currently at Waters Corporation building Generative AI platforms. He's worked across 3 countries — India, South Africa, and the USA. Want to know more about his work, skills, or journey?" },
            { intent: 'currentRole', patterns: [/what.*do|current.*role|job|work/i],
              response: "Prateek is an **AI/ML Engineer at Waters Corporation** (since Nov 2024). He builds production-grade Generative AI search platforms using RAG, LangChain, and AWS Bedrock. He also architected an SAP automation platform that reduced manual operations by 80-85%!" },
            { intent: 'contact', patterns: [/contact|reach|email|connect/i],
              response: "You can reach Prateek at:\n📧 **prateek.singh090493@gmail.com**\n💼 **LinkedIn:** linkedin.com/in/prateeksingh9493\n🐙 **GitHub:** github.com/SinghPrateek09\n\nFeel free to connect!" },
            { intent: 'hire', patterns: [/hire|hiring|available|opportunity|opportunities/i],
              response: "Prateek is currently working at Waters Corporation, but he's always open to interesting conversations and opportunities! Reach out via email at **prateek.singh090493@gmail.com** or connect on LinkedIn." },
            { intent: 'thanks', patterns: [/thank|thanks|awesome|great|helpful/i],
              response: "You're welcome! 😊 Happy to help. Feel free to ask if you have more questions about Prateek!" },
            { intent: 'goodbye', patterns: [/bye|goodbye|see you|later/i],
              response: "Goodbye! 👋 Thanks for chatting. Feel free to come back anytime you want to learn more about Prateek!" },
            { intent: 'greeting', patterns: [/hello|hi|hey|greetings/i],
              response: "Hey there! 👋 How can I help you learn about Prateek today? You can ask about his experience, skills, projects, or journey!" }
        ];

        for (const item of genericPatterns) {
            for (const pattern of item.patterns) {
                if (pattern.test(query)) return { intent: item.intent, response: item.response };
            }
        }
        return null;
    }

    levenshteinDistance(str1, str2) {
        const m = str1.length, n = str2.length;
        const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
        for (let i = 0; i <= m; i++) dp[i][0] = i;
        for (let j = 0; j <= n; j++) dp[0][j] = j;
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
                else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
        return dp[m][n];
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // ========== GEMINI API (Optional) ==========

    setGeminiKey(apiKey) {
        this.geminiApiKey = apiKey;
        this.useGemini = true;
        console.log('Gemini API enabled');
    }

    async getGeminiResponse(query) {
        const systemPrompt = this.buildGeminiSystemPrompt();
        const contextStr = this.context.slice(-this.contextWindow * 2)
            .map(c => `${c.role === 'user' ? 'User' : 'Assistant'}: ${c.text}`).join('\n');

        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.geminiApiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            role: 'user',
                            parts: [{ text: `${systemPrompt}\n\n=== Recent Conversation ===\n${contextStr}\n\n=== Current Question ===\n${query}` }]
                        }],
                        generationConfig: { temperature: 0.7, topK: 40, topP: 0.95, maxOutputTokens: 500 },
                        safetySettings: [
                            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
                        ]
                    })
                }
            );
            if (!response.ok) throw new Error('Gemini API error');
            const data = await response.json();
            if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                return data.candidates[0].content.parts[0].text;
            }
            throw new Error('Invalid response');
        } catch (error) {
            console.error('Gemini error, falling back to local:', error);
            return await this.getLocalResponse(query);
        }
    }

    buildGeminiSystemPrompt() {
        return `You are an AI assistant for Prateek Singh's portfolio. Answer based ONLY on the info below. Be friendly, professional, occasionally witty. Keep responses concise (2-4 sentences).

RULES:
1. ONLY use info provided. Never make up details.
2. If unsure, say so honestly and suggest what you CAN answer.
3. Never discuss: salary, personal relationships, exact address, visa status, political views.
4. For 2023-2024 gap, say he "worked with consultancies to stay sharp while searching for full-time opportunities."
5. Use **bold** for emphasis.
6. Maintain conversational context — if user says "tell me more" or uses pronouns, refer to recent topics.

=== PRATEEK'S INFO ===
Current: AI/ML Engineer at Waters Corporation (Nov 2024-Present), Milford MA
Summary: 7+ years AI/ML & Data Analyst experience across USA, South Africa, India.

Waters work: AI search using AWS Bedrock + Claude + RAG across 1M+ docs; SAP Hybris automation reducing manual ops 80-85% (45+ tasks).
MassDOT (Feb-Jun 2024): Data Analyst, CDLIS/SPEXS pipelines, Tableau dashboards.
LTI (2016-2021): Integration Consultant → Sr. Data Engineer → Data Analyst. India + Johannesburg (Liberty Insurance, 1.5 yrs as PoC).

Education: M.S. Analytics Northeastern (2023, GPA 3.97/4.0); B.Tech E&TC BVP Pune (2016).
Skills: Python, AWS (Lambda/Bedrock/S3), LangChain, RAG, OpenSearch, MongoDB, Streamlit, SAP Hybris, Tableau.
Personal: Born Lucknow 1993; lives Milford MA; speaks English, Hindi, understands Marathi; plays cricket (MiLC USA, MSCL USA, LMS South Africa); not a chai person; motto: "Good things happen to those who build them"

Contact: prateek.singh090493@gmail.com | linkedin.com/in/prateeksingh9493 | github.com/SinghPrateek09`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.prateekChatbot = new PrateekChatbot();
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PrateekChatbot;
}
