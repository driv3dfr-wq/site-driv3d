# Site D-Riv 3D

Site internet de D-Riv 3D (d-riv3d.fr) : maquettes d'architecture sur-mesure imprimées en 3D.

Le site est fait de simples fichiers HTML, sans WordPress ni base de données. Il est hébergé gratuitement sur Netlify, qui le met à jour automatiquement à chaque modification de ce dépôt.

## Où se trouve quoi

| Page | Fichier |
| --- | --- |
| Accueil | `index.html` |
| Réalisations | `realisations/index.html` |
| Maquettes et options (avec FAQ et prix) | `maquettes/index.html` |
| Pour les pros | `professionnels/index.html` |
| Demander un devis (formulaire) | `devis/index.html` |
| Page après envoi du formulaire | `merci/index.html` |
| Mentions légales | `mentions-legales/index.html` |
| Page d'erreur | `404.html` |

- Couleurs et mise en page : `assets/css/style.css` (les couleurs sont tout en haut du fichier).
- Photos : `assets/img/realisations/<projet>/`. Chaque photo existe en grand (`01.webp`) et en petit (`01-s.webp`).
- Logos : `assets/img/logo/`.
- Hébergement et redirections des anciennes adresses : `netlify.toml`.

## Modifier un texte

1. Sur GitHub, ouvre le fichier de la page concernée.
2. Clique sur le crayon (Edit), change le texte entre les balises, sans toucher aux `<` `>`.
3. Clique sur **Commit changes**. Le site en ligne est mis à jour en une minute environ.

En cas d'erreur, l'onglet **History** du fichier permet de revenir à une version précédente.

## Formulaire de devis

Le formulaire est relié au service gratuit Web3Forms (web3forms.com). Chaque demande arrive directement par mail sur driv3dfr@gmail.com. La clé `access_key` dans `devis/index.html` indique à Web3Forms où envoyer les demandes.

Les plans ne passent pas par le formulaire (pièces jointes payantes chez Web3Forms) : le client les envoie en répondant au mail.
