document.querySelectorAll(".menu-toggle").forEach(btn=>btn.addEventListener("click",()=>document.querySelector(".nav").classList.toggle("open")));

function prepareWhatsApp(event){
  event.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const dates=document.getElementById("dates").value.trim();
  const travelers=document.getElementById("travelers").value.trim();
  const interest=document.getElementById("interest").value;
  const message=document.getElementById("message").value.trim();
  const text=`Hello Bushland Trails Kenya Safaris,

My name is ${name}.
Email: ${email}
Travel dates: ${dates || "Not decided yet"}
Travelers: ${travelers || "Not decided yet"}
I'm interested in: ${interest}

Additional details:
${message || "I would like help planning my trip."}`;
  // IMPORTANT: Replace YOURWHATSAPPNUMBER below with your full international number, digits only.
  const whatsapp="YOURWHATSAPPNUMBER";
  if(whatsapp.includes("YOUR")){
    alert("Please replace YOURWHATSAPPNUMBER in contact.html and assets/script.js with your WhatsApp number first.");
    return false;
  }
  window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`,"_blank");
  return false;
}
