import Footer from "components/footer";
import Navigation from "components/navigation";

export default () => {
  return (
    <div
      className="bg-right-top bg-no-repeat"
      style={{ backgroundImage: `url("images/other/hero-bg.svg")` }}
    >
      <Navigation />

      <div className="container py-14">
        <h3 className="mb-6 text-2xl font-bold text-center lg:text-4xl text-denim-800 lg:mb-10">
          Politique de confidentialité – Jardin mental
        </h3>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <Title title="Qui est responsable de Jardin mental ?" />
            <Content>
              <p>
                Le service numérique « Jardin mental » est à l’initiative de la
                Direction générale de la santé au sein de la Fabrique numérique
                des ministères sociaux.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Pourquoi traitons-nous des données à caractère personnel ?" />
            <Content>
              <p className="mb-0.5">
                Jardin mental traite des données à caractère personnel pour les
                raisons suivantes :
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Accompagner les personnes qui le souhaitent à mieux connaître
                  et suivre leurs symptômes, leurs ressentis ou toute activité
                  personnalisée, leur permettant de faciliter leur
                  accompagnement psychologique.
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Quelles sont les données à caractère personnel que nous traitons ?" />
            <Content>
              <p className="mb-0.5">
                Jardin mental traite les données suivantes :
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Données relatives aux professionnels</strong>: adresse
                  e-mail. La communication de cette donnée est une simple
                  possibilité proposée pour être tenu au courant des prochaines
                  évolutions et actualités de Jardin mental.
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Qu’est-ce qui nous autorise à traiter des données à caractère personnel ?" />
            <Content>
              <p className="mb-0.5">
                Jardin mental traite des données à caractère personnel sur son
                application en se basant sur :
              </p>
              <ul className="list-disc list-inside">
                <li>
                  L’exécution d’une mission d’intérêt public ou relevant de
                  l’exercice de l’autorité publique dont est investi le
                  responsable de traitement au sens de l’article 6-1 e) du RGPD.
                </li>
              </ul>
              <p className="mb-0.5">Et concernant le site vitrine, sur :</p>
              <ul className="list-disc list-inside">
                <li>
                  L’intérêt légitime poursuivi par le responsable de traitement
                  sans que ne prévalent les intérêts ou les libertés et droits
                  fondamentaux des personnes concernées, au sens de l’article
                  6-1 f) du RGPD.
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Pendant combien de temps conservons-nous ces données ?" />
            <Content>
              <table className="mx-auto border border-collapse table-auto border-denim-900">
                <thead>
                  <tr>
                    <th className="p-3 border border-denim-900">
                      Catégories de données
                    </th>
                    <th className="p-3 border border-denim-900">
                      Durée de conservation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-denim-900">
                      Données relatives aux professionnels
                    </td>
                    <td className="p-3 border border-denim-900">
                      Jusqu’à la demande de désinscription à la newsletter
                    </td>
                  </tr>
                </tbody>
              </table>
            </Content>
          </div>

          <div>
            <Title title="Quels sont vos droits ?" />
            <Content>
              <p>Vous disposez :</p>
              <ul className="list-disc list-inside mb-2">
                <li>D’un droit d’information et droit d’accès ;</li>
                <li>D’un droit de rectification ;</li>
                <li>D’un droit d’opposition ;</li>
                <li>D’un droit à la limitation du traitement.</li>
              </ul>
              <p className="mb-2">
                Pour les exercer, contactez-nous par voie électronique :{" "}
                <a
                  className="text-denim-700"
                  href="mailto:jardinmental@fabrique.social.gouv.fr"
                >
                  jardinmental@fabrique.social.gouv.fr
                </a>
              </p>
              <p>Par voie postale :</p>
              <ul className="list-inside italic mb-2">
                <li>Direction du Numérique des ministères sociaux</li>
                <li>Ministère des solidarités et de la santé</li>
                <li>39-43 Quai André Citroën</li>
                <li>75015 Paris</li>
              </ul>
              <p className="mb-2">
                Puisque ce sont des droits personnels, nous ne traiterons votre
                demande que si nous sommes en mesure de vous identifier. Dans le
                cas où nous ne parvenons pas à vous identifier, nous pouvons
                être amenés à vous demander une preuve de votre identité.
              </p>
              <p className="mb-2">
                Pour vous aider dans votre démarche, vous trouverez un modèle de
                courrier élaboré par la CNIL ici :{" "}
                <a
                  className="text-denim-700"
                  href="https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces"
                >
                  https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces
                </a>
              </p>
              <p>
                Nous nous engageons à vous répondre dans un délai raisonnable
                qui ne saurait dépasser 1 mois à compter de la réception de
                votre demande.
              </p>
            </Content>
          </div>

          <div>
            <Title title="Qui va avoir accès à ces données ?" />
            <Content>
              <p className=" mb-1">
                Les accès aux données sont strictement encadrés et juridiquement
                justifiés. Les personnes suivantes vont avoir accès aux données
                :
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Les membres de l’équipe Jardin Mental au sein de la Fabrique
                  numérique des ministères sociaux.
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Quelles mesures de sécurité mettons-nous en place ?" />
            <Content>
              <p className=" mb-1">
                Nous mettons en place plusieurs mesures pour sécuriser les
                données :
              </p>
              <ul className="list-disc list-inside">
                <li>Stockage des données en base de données ;</li>
                <li>Cloisonnement des données ;</li>
                <li>Mesures de traçabilité ;</li>
                <li>Surveillance ;</li>
                <li>
                  Protection contre les virus, malwares et logiciels espions ;
                </li>
                <li>Protection des réseaux ;</li>
                <li>Sauvegarde ;</li>
                <li>
                  Mesures restrictives limitant l’accès physique aux données à
                  caractère personnel.
                </li>
              </ul>
            </Content>
          </div>

          <div>
            <Title title="Qui nous aide à traiter les données à caractère personnel ?" />
            <Content>
              <table className="mx-auto border border-collapse table-auto border-denim-900">
                <thead>
                  <tr>
                    <th className="p-3 border border-denim-900">
                      Sous-traitant
                    </th>
                    <th className="p-3 border border-denim-900">
                      Pays destinataire
                    </th>
                    <th className="p-3 border border-denim-900">
                      Traitement réalisé
                    </th>
                    <th className="p-3 border border-denim-900">Garanties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-denim-900">OVH</td>
                    <td className="p-3 border border-denim-900">France</td>
                    <td className="p-3 border border-denim-900">Hébergement</td>
                    <td className="p-3 border border-denim-900">
                      <a
                        className="text-denim-700"
                        href="https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/9e74492-OVH_Data_Protection_Agreement-FR-6.0.pdf"
                      >
                        OVH Data Protection Agreement
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Content>
          </div>

          <div>
            <Title title="Cookies" />
            <Content>
              <p className=" mb-2">
                Un cookie est un fichier déposé sur votre terminal lors de la
                visite d’un site. Il a pour but de collecter des informations
                relatives à votre navigation et de vous adresser des services
                adaptés à votre terminal (ordinateur, mobile ou tablette).
              </p>
              <p className=" mb-2">
                En application de l’article 5(3) de la directive 2002/58/CE
                modifiée concernant le traitement des données à caractère
                personnel et la protection de la vie privée dans le secteur des
                communications électroniques, transposée à l’article 82 de la
                loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux
                fichiers et aux libertés, les traceurs ou cookies suivent deux
                régimes distincts.
              </p>
              <p className=" mb-2">
                Les cookies strictement nécessaires au service ou ayant pour
                finalité exclusive de faciliter la communication par voie
                électronique sont dispensés de consentement préalable au titre
                de l’article 82 de la loi n°78-17 du 6 janvier 1978.
              </p>
              <p className=" mb-2">
                Les cookies n’étant pas strictement nécessaires au service ou
                n’ayant pas pour finalité exclusive de faciliter la
                communication par voie électronique doivent être consentis par
                l’utilisateur.
              </p>
              <p className=" mb-2">
                Ce consentement de la personne concernée pour une ou plusieurs
                finalités spécifiques constitue une base légale au sens du RGPD
                et doit être entendu au sens de l'article 6-a du Règlement (UE)
                2016/679 du Parlement européen et du Conseil du 27 avril 2016
                relatif à la protection des personnes physiques à l'égard du
                traitement des données à caractère personnel et à la libre
                circulation de ces données.
              </p>
              <p className=" mb-2">
                À tout moment, vous pouvez refuser l’utilisation des cookies et
                désactiver le dépôt sur votre ordinateur en utilisant la
                fonction dédiée de votre navigateur (fonction disponible
                notamment sur Microsoft Internet Explorer 11, Google Chrome,
                Mozilla Firefox, Apple Safari et Opera).
              </p>
              <p className=" mb-2">
                Pour aller plus loin, vous pouvez consulter les fiches proposées
                par la Commission Nationale de l'Informatique et des Libertés
                (CNIL) :
              </p>
              <ul className="list-inside list-disc">
                <li>
                  <a
                    className="text-denim-700"
                    href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/que-dit-la-loi"
                  >
                    Cookies & traceurs : que dit la loi ?
                  </a>
                </li>
                <li>
                  <a
                    className="text-denim-700"
                    href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/comment-se-proteger/maitriser-votre-navigateur"
                  >
                    Cookies : les outils pour les maîtriser
                  </a>
                </li>
              </ul>
              <br />
              <p className=" mb-2">
                Nous utilisons Matomo, une solution de mesure d’audience,
                configuré en “mode exempté” ne nécessitant pas le recueil du
                consentement des utilisateurs conformément aux recommandations
                de la CNIL.
              </p>
              <label htmlFor="check">
                <input type="checkbox" id="check" checked />
                <span className="font-bold text-denim-700">
                  Vous êtes suivis de manière anonyme. Décochez cette case pour
                  ne plus être suivi.
                </span>
              </label>
            </Content>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Title = ({ title }) => (
  <h5 className="mb-2 text-xl font-semibold md:text-2xl lg:text-3xl text-denim-700">
    {title}
  </h5>
);

const Content = ({ children }) => (
  <div className="text-sm text-black">{children}</div>
);
