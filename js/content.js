const KJ = {
  apps: [
    ["accueil", "Accueil", "pc"],
    ["apropos", "À propos", "user"],
    ["experience", "Expérience", "case"],
    ["skills", "Compétences", "chip"],
    ["projets", "Projets", "folder"],
    ["homelab", "Homelab", "server"],
    ["certs", "Certifications", "badge"],
    ["cv", "CV", "doc"],
    ["contact", "Contact", "mail"],
    ["reseau", "Réseau", "net"],
    ["cyber", "Sécurité", "badge"],
    ["corbeille", "Corbeille", "bin"],
    ["reglages", "Paramètres", "gear"]
  ]
};

KJ.pages = {};

KJ.pages.accueil = `
  <p class="kicker">Session KOMJORDAN\\Axel</p>
  <h2>Axel KAMGAING KOM</h2>
  <p>Administrateur systèmes, réseaux et cybersécurité. Je conçois, sécurise et supervise des infrastructures Windows, Linux, réseau et cloud. Objectif : analyste SOC, puis RSSI.</p>
  <p>Disponible en France. Site komjordan.fr. Cette session est une maquette locale, non affiliée à Microsoft.</p>
  <div class="cards">
    <article class="card"><div><h3>Parcours</h3><p>LIKABO, Stones and Gold, SIGERIS, Envol.</p></div><button data-open="experience">Ouvrir</button></article>
    <article class="card"><div><h3>Étude de cas</h3><p>Homelab Proxmox, page complète.</p></div><button data-open="homelab">Voir le projet</button></article>
    <article class="card"><div><h3>Contact</h3><p>axel@komjordan.fr</p></div><button data-open="contact">Écrire</button></article>
  </div>`;

KJ.pages.apropos = `
  <p class="kicker">Profil</p>
  <h2>À propos</h2>
  <p>Axel KAMGAING est administrateur systèmes, réseaux et cybersécurité. Le CV administrateur le présente aussi comme administrateur système et cloud, avec une pratique Windows Server, Microsoft 365 et Azure.</p>
  <div class="row"><b>Domaine</b><span>KOMJORDAN.LOCAL — nom fictif de la maquette.</span></div>
  <div class="row"><b>Utilisateur</b><span>KOMJORDAN\\Axel</span></div>
  <div class="row"><b>Site</b><span>komjordan.fr</span></div>
  <div class="row"><b>Objectif</b><span>Analyste SOC, puis RSSI.</span></div>
  <div class="row"><b>Formation</b><span>Institut F2I, ingénieur systèmes, réseaux et cybersécurité, 2023–2025. IUT Douala, licence administration systèmes et réseaux, 2020–2021.</span></div>
  <p class="note">Les missions ci-dessous viennent du CV et du site publié. Rien n’a été ajouté.</p>`;

KJ.pages.experience = `
  <p class="kicker">CV administrateur</p>
  <h2>Expériences</h2>
  <h3>LIKABO — Support IT &amp; Cloud</h3>
  <p class="meta">Novembre 2025 — juin 2026</p>
  <p>Administration d’Entra ID (utilisateurs, groupes, rôles), déploiement Azure (VM, VNet, NSG), Microsoft 365 (Exchange Online, Teams, SharePoint Online, licences), participation à une architecture hybride AD DS / Entra ID, support de niveau 2 et rédaction des procédures.</p>
  <h3>Stones and Gold — Administrateur réseaux &amp; systèmes</h3>
  <p class="meta">Décembre 2022 — octobre 2023. Le CV indique aussi « Administrateur IT ».</p>
  <p>Supervision Centreon et SNMP. Le CV indique une disponibilité des services améliorée de 15 %. Administration Windows Server (OU, AD, GPO, DFS), déploiements SCCM/MECM, Veeam Backup et réplication, MFA, DLP et segmentation dans un cadre RGPD.</p>
  <h3>SIGERIS SARL — Administrateur systèmes et réseaux</h3>
  <p class="meta">Janvier 2022 — août 2022. Le site public indique « Assistant administrateur réseaux ».</p>
  <p>Microsoft 365, accès conditionnel (MFA, restrictions géographiques, contrôle des appareils), switchs et routeurs Cisco (VLAN, STP), ACL, FortiGate avec VPN IPsec, maintenance et Zabbix.</p>
  <h3>Envol Learn and Travel — Technicien informatique</h3>
  <p class="meta">Janvier 2016 — juillet 2018</p>
  <p>Support niveaux 1 et 2. Le CV indique une satisfaction estimée à 95 % sur plus de 200 tickets annuels. Parc GLPI, portail captif pfSense, vidéosurveillance IP et réseau dédié.</p>`;

KJ.pages.skills = `
  <p class="kicker">Compétences déclarées</p>
  <h2>Compétences</h2>
  <div class="row"><b>Systèmes</b><span>Windows Server 2003 à 2022, et 2025 en laboratoire. Active Directory, GPO, DNS, DHCP, DFS. Linux Debian et Ubuntu.</span></div>
  <div class="row"><b>Réseaux</b><span>LAN, WAN, VLAN, TCP/IP. Cisco, FortiGate, VPN IPsec. OPNsense et WireGuard.</span></div>
  <div class="row"><b>Identité</b><span>Microsoft 365, Entra ID, Intune.</span></div>
  <div class="row"><b>Sécurité</b><span>Wazuh, Splunk, Wireshark, Nmap.</span></div>
  <div class="row"><b>Supervision</b><span>Zabbix, Centreon, Prometheus, Grafana.</span></div>
  <div class="row"><b>Plateformes</b><span>Proxmox, VMware, Veeam Backup, n8n.</span></div>`;

KJ.pages.certs = `
  <p class="kicker">Obtenue n’est pas en préparation</p>
  <h2>Certifications</h2>
  <div class="row"><b>AZ-104</b><span><span class="tag ok">Obtenue</span> Microsoft Azure Administrator Associate.</span></div>
  <div class="row"><b>FCA</b><span><span class="tag ok">Obtenue</span> Fortinet Certified Associate in Cybersecurity. Mentionnée sur le CV et le site.</span></div>
  <div class="row"><b>SC-300</b><span><span class="tag wait">En préparation</span> Non obtenue.</span></div>
  <div class="row"><b>AWS SAA</b><span><span class="tag wait">En préparation</span> AWS Solutions Architect Associate. Non obtenue.</span></div>`;

KJ.pages.cv = `
  <p class="kicker">Extrait local</p>
  <h2>CV</h2>
  <p>Le PDF complet n’est pas copié dans la maquette, pour limiter le poids et éviter un lien hors dossier. L’extrait reprend le CV administrateur : identité, expériences, compétences, AZ-104 et FCA obtenues.</p>
  <p><button type="button" id="dl-cv">Télécharger l’extrait (.txt)</button></p>
  <p><a href="mailto:axel@komjordan.fr?subject=Demande%20de%20CV">Demander le PDF</a></p>
  <p class="note" id="cv-note"></p>`;

KJ.pages.contact = `
  <p class="kicker">Démonstration locale</p>
  <h2>Contact</h2>
  <p>axel@komjordan.fr · linkedin.com/in/komjordan · github.com/komjordan</p>
  <form id="contact-form">
    <label for="c-name">Nom</label><input id="c-name" required>
    <label for="c-mail">E-mail</label><input id="c-mail" type="email" required>
    <label for="c-msg">Message</label><textarea id="c-msg" required></textarea>
    <p><button type="submit">Valider la démonstration</button></p>
    <p class="err" id="c-err"></p>
    <p class="note" id="c-ok"></p>
  </form>`;

KJ.pages.cyber = `
  <p class="kicker">Compétences · pas une console live</p>
  <h2>Cybersécurité</h2>
  <p>Wazuh et Splunk pour la collecte et l’analyse. Wireshark et Nmap pour l’observation. MFA, DLP et segmentation vus en poste, selon le CV. L’audit CEH de l’Institut F2I est pédagogique et autorisé. Aucune alerte réelle n’est affichée ici.</p>
  <p>Orientation : analyste SOC, puis RSSI. SC-300 est en préparation, pas obtenue.</p>`;

KJ.pages.reseau = `
  <p class="kicker">Compétences · aucun scan</p>
  <h2>Réseau</h2>
  <p>LAN, WAN, VLAN, TCP/IP, DNS, DHCP. Cisco (VLAN, STP, routeurs). FortiGate et VPN IPsec, vus chez SIGERIS. OPNsense et WireGuard font partie des compétences déclarées. Fiche projet OPNsense : à compléter.</p>
  <p class="note">Ce poste ne sonde aucun équipement.</p>`;

KJ.pages.corbeille = `
  <p class="kicker">Corbeille</p>
  <h2>Corbeille vide</h2>
  <p>Aucun fichier n’a été supprimé dans cette session. La corbeille est une démonstration : elle n’efface rien sur l’ordinateur.</p>
  <p><button type="button" id="bin-demo">Déposer un élément de démonstration</button></p>
  <ul id="bin-list"></ul>`;

KJ.pages.reglages = `
  <p class="kicker">Paramètres de la maquette</p>
  <h2>Paramètres</h2>
  <div class="tabs" id="set-tabs">
    <button type="button" class="on" data-tab="sys">Système</button>
    <button type="button" data-tab="perso">Personnalisation</button>
    <button type="button" data-tab="apropos">À propos</button>
  </div>
  <div id="set-panel"></div>`;

KJ.pages.projets = `
  <p class="kicker">Dossiers publiés</p>
  <h2>Projets</h2>
  <div class="cards" id="project-list"></div>`;

KJ.study = `
  <button type="button" class="back" data-open="projets">Retour aux projets</button>
  <p class="kicker">Étude de cas · sources publiées sur komjordan.fr</p>
  <h2>Homelab Proxmox</h2>
  <p>Une infrastructure d’exercice, documentée en 2026. Les chiffres cités sont ceux de la page publiée, pas une mesure en direct. Cette maquette ne se connecte à aucun hôte.</p>
  <h3>Contexte et besoin</h3>
  <p>Le besoin publié est de disposer, à la maison, d’une infrastructure proche d’un environnement d’entreprise : annuaire, sécurité, supervision, DNS, stockage et sauvegarde. La page homelab la présente comme une série LinkedIn. Deux épisodes sont publiés. L’état décrit date du 29 octobre 2026.</p>
  <h3>Objectifs</h3>
  <p>Héberger les services d’un petit système d’information sur un hyperviseur unique. Voir ce qui se passe, être prévenu quand quelque chose ne va pas, et conserver des sauvegardes automatiques. L’accès distant est chiffré, via Tailscale, selon la page. Un agent IA d’exploitation, Joe, est encadré : compte dédié, droits limités, confirmations.</p>
  <h3>Architecture</h3>
  <svg class="schema" viewBox="0 0 640 220" role="img" aria-label="Schéma du homelab publié">
    <rect x="250" y="16" width="140" height="36" rx="6" fill="#0067c0"/><text x="320" y="39" text-anchor="middle" fill="#fff" font-size="13" font-family="Segoe UI">Proxmox VE 9</text>
    <rect x="20" y="90" width="120" height="32" rx="6" fill="#107c10"/><text x="80" y="111" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI">Active Directory</text>
    <rect x="155" y="90" width="90" height="32" rx="6" fill="#c43e1c"/><text x="200" y="111" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI">Wazuh</text>
    <rect x="260" y="90" width="130" height="32" rx="6" fill="#f7630c"/><text x="325" y="111" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI">Prometheus Grafana</text>
    <rect x="405" y="90" width="100" height="32" rx="6" fill="#0f7b0f"/><text x="455" y="111" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI">AdGuard</text>
    <rect x="520" y="90" width="100" height="32" rx="6" fill="#5c2d91"/><text x="570" y="111" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI">n8n</text>
    <rect x="80" y="160" width="160" height="32" rx="6" fill="#004e8c"/><text x="160" y="181" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI">PBS · chaque nuit</text>
    <rect x="270" y="160" width="180" height="32" rx="6" fill="#b7472a"/><text x="360" y="181" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI">OMV + Immich</text>
    <rect x="470" y="160" width="120" height="32" rx="6" fill="#0b6a0b"/><text x="530" y="181" text-anchor="middle" fill="#fff" font-size="11" font-family="Segoe UI">Tailscale</text>
  </svg>
  <p>L’hôte publié est un Proxmox VE 9. Chiffres de la page : processeur Ryzen AI 9 HX 370, 96 Go de mémoire, 4 To, 13 machines virtuelles et 9 conteneurs LXC. Ce ne sont pas des sondes de cette page.</p>
  <h3>Rôle de chaque composant</h3>
  <div class="row"><b>Proxmox VE 9</b><span>Hyperviseur. Il porte les VM et les LXC. Les tags sont décrits comme indispensables au-delà d’une dizaine de machines.</span></div>
  <div class="row"><b>Active Directory</b><span>Annuaire et stratégies de groupe, Windows Server 2025.</span></div>
  <div class="row"><b>Wazuh</b><span>SIEM. Règles personnalisées, testées sur une VM de test avant d’être gardées. La page ne reproduit pas les règles.</span></div>
  <div class="row"><b>Prometheus</b><span>Collecte des métriques des machines et des services.</span></div>
  <div class="row"><b>Grafana</b><span>Tableaux de bord de ces métriques.</span></div>
  <div class="row"><b>AdGuard Home</b><span>Filtrage DNS de tout le réseau, plus un outil maison d’analyse DNS mentionné sur la page.</span></div>
  <div class="row"><b>PBS</b><span>Sauvegardes automatiques chaque nuit. L’épisode 1 mentionne un état des sauvegardes reçu par iMessage.</span></div>
  <div class="row"><b>OpenMediaVault</b><span>Stockage, avec Immich pour les photos.</span></div>
  <div class="row"><b>n8n</b><span>Automatisation. Le détail des workflows n’est pas rédigé sur la page — à compléter.</span></div>
  <div class="row"><b>Tailscale</b><span>Accès distant chiffré.</span></div>
  <h3>Mise en œuvre documentée</h3>
  <p>L’épisode 1 présente le laboratoire et Joe, l’agent d’exploitation. Il utilise un compte Proxmox dédié, avec des droits API limités au nécessaire. Aucun secret ne passe dans les conversations. Avant une suppression de VM, une confirmation est demandée. L’épisode cite un cas où la suppression a été annulée.</p>
  <p>L’épisode 2 décrit la supervision et la réaction. Prometheus collecte, Grafana affiche, AdGuard filtre le DNS. Wazuh analyse les journaux. Les règles sont essayées sur une VM de test avant d’être conservées.</p>
  <p>La réaction publiée dépend du niveau. Autour de 7/15 : un e-mail court et un iMessage. Autour de 12/15 : un appel WhatsApp. L’isolation d’une VM, en coupant sa carte réseau sur Proxmox, n’est décrite qu’après une double confirmation, suivie d’un compte rendu écrit. Les alertes arrivent par webhook : la page indique que Zabbix, Grafana ou Elastic peuvent se brancher sur la même chaîne.</p>
  <h3>Sécurité et sauvegarde</h3>
  <p>Compte d’API limité, absence de secrets dans les échanges, confirmation avant une action destructive, règles SIEM essayées hors production, sauvegardes PBS chaque nuit. OPNsense est une compétence déclarée, pas un composant décrit sur la page homelab. Je ne l’ajoute pas au schéma.</p>
  <h3>Ce qui est documenté comme leçon</h3>
  <p>Les tags Proxmox deviennent indispensables dès qu’on dépasse une dizaine de machines. Les conteneurs LXC conviennent aux petits services : légers, rapides à créer. Une IA utile est une IA encadrée : droits limités, confirmations, aucun secret dans les échanges.</p>
  <p class="note">Difficultés rédigées comme incidents : non documentées sous cette forme — à compléter. Les trois leçons ci-dessus sont celles de la page, pas une reconstitution.</p>
  <h3>Résultat</h3>
  <p>Deux épisodes publiés, avec des captures sur le site. Le laboratoire annoncé comprend l’annuaire, le SIEM, la supervision, le DNS, le NAS et les sauvegardes nocturnes. Le prochain épisode annoncé porte sur Proxmox Backup Server. Compétences montrées : virtualisation, Active Directory, détection, supervision, DNS, sauvegarde, automatisation, accès distant.</p>`;

KJ.projects = [
  { id: "homelab", name: "Homelab Proxmox", blurb: "Infrastructure d’exercice, 2026. Étude de cas complète.", full: true },
  { id: "komi", name: "KomiRemote", blurb: "Prise en main à distance, fork de RustDesk, relais personnel." },
  { id: "ad", name: "Active Directory & GPO", blurb: "Domaine de laboratoire, Windows Server 2025." },
  { id: "glpi", name: "GLPI", blurb: "ITSM sur Debian 12." },
  { id: "veeam", name: "Veeam", blurb: "Sauvegarde et restauration, tutoriel publié." },
  { id: "splunk", name: "Splunk", blurb: "SIEM de laboratoire, pas des incidents réels." },
  { id: "audit", name: "Audit CEH", blurb: "Étude de cas pédagogique, Institut F2I, autorisée." }
];

KJ.projectPages = {
  komi: `<button class="back" data-open="projets">Retour aux projets</button><p class="kicker">Projet publié</p><h2>KomiRemote</h2><p>Outil de prise en main à distance. Fork de RustDesk, identité propre, serveur relais personnel, compilation GitHub Actions. Les postes s’identifient auprès du relais. Connexion directe si possible, relais sinon. Windows est disponible, macOS est en bêta, Linux, Android et iOS sont en cours, selon le site. Licence AGPL-3.0. KomiRemote n’est pas affilié à RustDesk.</p><p>Objectif publié : un outil maîtrisé de bout en bout, au nom d’Axel, relié à son relais, distribué depuis le site.</p><p class="note">Difficultés : non documentées ici — à compléter.</p>`,
  ad: `<button class="back" data-open="projets">Retour aux projets</button><p class="kicker">Tutoriel publié · 2025</p><h2>Active Directory &amp; GPO</h2><p>Déploiement d’un domaine de laboratoire sous Windows Server 2025 : AD DS, DNS, unités d’organisation et stratégies de groupe. Le tutoriel décrit le renommage du serveur, une adresse statique, la promotion en contrôleur de domaine, la gestion des GPO, puis la surveillance.</p><p>Objectif publié : un domaine interne prêt à accueillir des utilisateurs, des postes et des stratégies. Cette maquette ne reprend pas les adresses IP du lab.</p><p class="note">Difficultés : non reprises — à compléter.</p>`,
  glpi: `<button class="back" data-open="projets">Retour aux projets</button><p class="kicker">Tutoriel publié · 2025</p><h2>GLPI</h2><p>ITSM sur Debian 12 : tickets, inventaire, cadre ITIL. Pile publiée : Apache, PHP, MariaDB. Le tutoriel couvre la préparation du serveur, l’installation, les droits, les tickets et l’inventaire.</p><p class="note">Difficultés : non reprises — à compléter.</p>`,
  veeam: `<button class="back" data-open="projets">Retour aux projets</button><p class="kicker">Tutoriel publié · 2025</p><h2>Veeam Backup &amp; Replication</h2><p>Jobs de sauvegarde, dépôts, agents et restauration. Le site indique une restauration testée dans le cadre du tutoriel. Une bibliothèque virtuelle est évoquée. Ce n’est pas un journal de sauvegarde en direct.</p><p class="note">Difficultés : non reprises — à compléter.</p>`,
  splunk: `<button class="back" data-open="projets">Retour aux projets</button><p class="kicker">Lab pédagogique · 2025</p><h2>Splunk</h2><p>Installation, collecte par forwarders, rapports et tableau de bord, dans un laboratoire. Les attaques décrites sur le site sont des exercices pédagogiques, pas des incidents réels. Aucune procédure n’est reproduite ici.</p><p class="note">Difficultés : non reprises — à compléter.</p>`,
  audit: `<button class="back" data-open="projets">Retour aux projets</button><p class="kicker">Institut F2I · cadre autorisé</p><h2>Audit CEH</h2><p>Étude de cas pédagogique, avec autorisation explicite selon l’avant-propos publié. Phases nommées : reconnaissance, scan, énumération, analyse de vulnérabilités, recommandations. Les recommandations publiées portent sur les en-têtes HTTP, les mises à jour, la réduction des services exposés, la supervision et des tests planifiés. Aucune commande d’attaque n’est reprise.</p>`
};
