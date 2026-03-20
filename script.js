/// ----------------------
// Smooth scroll function
// ----------------------
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ----------------------
// Contact form (fake send message)
// ----------------------
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.style.display = "block";
    this.reset();

    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  });
}

// ----------------------
// AI Assistant
// ----------------------
function askAI() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  if (!input || !chat) return;

  const text = input.value.trim();
  if (text === "") return;

  // user message
  chat.innerHTML += `<p><b>You:</b> ${text}</p>`;

  // AI response
  const response = getResponse(text.toLowerCase());

  setTimeout(() => {
    chat.innerHTML += `<p><b>AI:</b> ${response}</p>`;
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
}

// ----------------------
// AI logic (smart replies)
// ----------------------
function getResponse(msg) {
  msg = msg.toLowerCase();

  // greetings
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello 👋 I'm Ahmad's AI assistant!";
  }

  // who is Ahmad
  if (msg.includes("who is ahmad")) {
    return "He is a programmer 💻 can create websites, apps, and games 🎮";
  }

  // contact / message Ahmad
  if (
    msg.includes("how i can contact with ahmad") ||
    msg.includes("how can i contact ahmad") ||
    msg.includes("contact ahmad") ||
    msg.includes("message ahmad") ||
    msg.includes("how to message ahmad")
  ) {
    return "You can contact Ahmad using the green WhatsApp button 💬 or scroll down for email 📩";
  }

  // WhatsApp specific
  if (msg.includes("whatsapp")) {
    return "Click the green WhatsApp button 💬 to message Ahmad directly.";
  }

  // email specific
  if (msg.includes("email")) {
    return "Scroll down to the contact section 📩 to send him an email.";
  }

  // projects
  if (msg.includes("project")) {
    return "Ahmad builds websites, apps, and games 🔥 Check the Projects section!";
  }

  // help
  if (msg.includes("help")) {
    return "Ask me about Ahmad, his projects, or how to contact him 💻";
  }

  return "I don't understand that yet 🤖 try asking about Ahmad, contact, or projects.";
}