// Fonction pour ajouter une classe CSS
function addClass(element, className) {
    // Vérifie si l'élément a la méthode classList (pour les navigateurs modernes)
    if (element.classList) {
        // Ajoute la classe à l'élément via la méthode classList
        element.classList.add(className);
    } else {
        // Si classList n'est pas pris en charge, utilise une méthode alternative
        element.className += ' ' + className;
    }
}

// Fonction pour supprimer une classe CSS
function removeClass(element, className) {
    if (element.classList) {
        // Supprime la classe de l'élément via la méthode classList
        element.classList.remove(className);
    } else {
        // Si classList n'est pas pris en charge, utilise une méthode alternative
        // Utilise une expression régulière pour remplacer la classe
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

// Attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Ajoute un écouteur d'événements pour le défilement de la fenêtre
    window.addEventListener('scroll', function() {
        // Script pour fixer la barre de navigation en haut lors du défilement
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 20) {
            addClass(navbar, 'sticky');
        } else {
            removeClass(navbar, 'sticky');
        }
        
        // Script pour afficher/masquer le bouton de retour en haut
        var scrollUpBtn = document.querySelector('.scroll-up-btn');
        if (window.scrollY > 500) {
            addClass(scrollUpBtn, 'show');
        } else {
            removeClass(scrollUpBtn, 'show');
        }
    });

    // Script pour remonter en haut de la page lors du clic sur le bouton
    var scrollUpBtn = document.querySelector('.scroll-up-btn');
    scrollUpBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Désactive le défilement fluide lors du clic sur le bouton de retour en haut
        document.documentElement.style.scrollBehavior = 'auto';
    });

    // Script pour le défilement fluide lors du clic sur les éléments du menu
    var menuItems = document.querySelectorAll('.navbar .menu li a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            // Récupère l'ID de la cible à partir de l'attribut href
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            // Fait défiler jusqu'à la cible avec un effet de défilement fluide
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Script pour basculer le menu/navbar
    var menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', function() {
        var menu = document.querySelector('.navbar .menu');
        // Active ou désactive la classe "active" pour afficher ou masquer le menu
        menu.classList.toggle('active');
        var menuIcon = document.querySelector('.menu-btn i');
        menuIcon.classList.toggle('active');
    });

    // Script pour l'animation de texte de dactylographie
    var typingElements = document.querySelectorAll('.typing');
    typingElements.forEach(function(element) {
        // Initialise l'animation de dactylographie pour chaque élément
        var typed = new Typed(element, {
            strings: ["Développeur Web Junior"], // Tableau de chaînes à afficher
            typeSpeed: 100, // Vitesse de frappe
            backSpeed: 60, // Vitesse de retour
            loop: true // Boucle infinie
        });
    });
    // Ajoute une autre animation de dactylographie pour un autre élément
    var typingElements = document.querySelectorAll('.typing-2');
    typingElements.forEach(function(element) {
        var typed = new Typed(element, {
            strings: [" les Mangas", " les Jeux Vidéos"," le Front-end","le Back-end"], // Tableau de chaînes à afficher
            typeSpeed: 100, // Vitesse de frappe
            backSpeed: 60, // Vitesse de retour
            loop: true // Boucle infinie
        });
    });

   // Sélectionnez les éléments du carrousel
const carousel = document.querySelector('.teams');
const cards = carousel.querySelectorAll('.card');
const prevBtn = carousel.querySelector('.prev-btn');
const nextBtn = carousel.querySelector('.next-btn');

let currentCardIndex = 0;

// Fonction pour afficher la carte suivante
function showNextCard() {
    cards[currentCardIndex].classList.remove('active');
    // Calcule l'index de la carte suivante en bouclant sur la liste des cartes
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    // Ajoute la classe "active" à la carte suivante pour l'afficher
    cards[currentCardIndex].classList.add('active');
}

// Fonction pour afficher la carte précédente
function showPrevCard() {
    cards[currentCardIndex].classList.remove('active');
    // Calcule l'index de la carte précédente en bouclant sur la liste des cartes
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    // Ajoute la classe "active" à la carte précédente pour l'afficher
    cards[currentCardIndex].classList.add('active');
}

// Ajouter des écouteurs d'événements aux boutons de navigation
prevBtn.addEventListener('click', showPrevCard);
nextBtn.addEventListener('click', showNextCard);

});
function openGmailPopup() {
    // URL spécifique pour ouvrir Gmail dans un nouvel e-mail
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=rondepierreromain@gmail.com";
    
    // Ouvre une nouvelle fenêtre pop-up avec l'URL de Gmail
    window.open(gmailUrl, "GmailPopup", "width=600,height=400");
}
function openCVPopup() {
    // URL spécifique pour ouvrir Gmail dans un nouvel e-mail
    const CvUrl = "https://drive.google.com/file/d/1188s07q8nMfWzmyHwxss51-nvlOyKm9Q/view";
    
    // Ouvre une nouvelle fenêtre pop-up avec l'URL de Gmail
    window.open(CvUrl);
}
