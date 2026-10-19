// Modèle logique "miroir" en français du modèle européen Xt-EHR EHDSPregnancyHistory
// Source : https://www.xt-ehr.eu/fhir/models/en/StructureDefinition-EHDSPregnancyHistory.html
// (FSH source : https://github.com/Xt-EHR/xt-ehr-common/blob/main/input/fsh/EHDS-models/pregnancyHistory.fsh
//  et .../dataSet.fsh pour le header hérité)
//
// Il ne s'agit PAS d'un héritage FHIR (Parent:) : FHIR ne permet pas de renommer le path
// d'un élément hérité (cf. strategie-modele-logique.md). Ce modèle est donc une redéfinition
// indépendante, structurellement alignée sur EHDSPregnancyHistory, avec des noms d'attributs
// en français. Chaque attribut est relié à son équivalent anglais d'origine via ^mapping,
// pour tracer l'alignement avec le modèle source.

Logical: HistoriqueGrossesseFR
Id: fr-historique-grossesse
Title: "Historique de grossesse (FR) - miroir du modèle Xt-EHR EHDSPregnancyHistory"
Description: "Modèle logique métier en français, structurellement aligné sur le modèle européen Xt-EHR EHDSPregnancyHistory. Chaque attribut est mappé vers son équivalent anglais d'origine (identity xt-ehr-pregnancy-history)."

* ^mapping[0].identity = "xt-ehr-pregnancy-history"
* ^mapping[0].uri = "https://www.xt-ehr.eu/fhir/models/en/StructureDefinition-EHDSPregnancyHistory.html"
* ^mapping[0].name = "Xt-EHR EHDSPregnancyHistory (EN)"

// Entête (équivalent du "header" hérité d'EHDSDataSet côté Xt-EHR)
* entete 1..1 Base "Informations générales (équivalent du header Xt-EHR)"
* entete ^mapping[0].identity = "xt-ehr-pregnancy-history"
* entete ^mapping[0].map = "header"

* entete.sujet 1..1 Base "Patient concerné par la grossesse"
* entete.sujet ^mapping[0].identity = "xt-ehr-pregnancy-history"
* entete.sujet ^mapping[0].map = "header.subject"

* entete.identifiant 0..* Identifier "Identifiant métier, unique dans son système"
* entete.identifiant ^mapping[0].identity = "xt-ehr-pregnancy-history"
* entete.identifiant ^mapping[0].map = "header.identifier"

* entete.auteur 0..* Base "Auteur(s) responsable(s) de l'information fournie"
* entete.auteur ^mapping[0].identity = "xt-ehr-pregnancy-history"
* entete.auteur ^mapping[0].map = "header.author[x]"

* entete.date 0..1 dateTime "Date (et heure éventuelle) de rédaction"
* entete.date ^mapping[0].identity = "xt-ehr-pregnancy-history"
* entete.date ^mapping[0].map = "header.date"

* entete.statut 1..1 CodeableConcept "Statut de cette observation"
* entete.statut ^mapping[0].identity = "xt-ehr-pregnancy-history"
* entete.statut ^mapping[0].map = "header.status"

* entete.source 0..1 CodeableConcept "Source de l'information (ex. patient ou son représentant)"
* entete.source ^mapping[0].identity = "xt-ehr-pregnancy-history"
* entete.source ^mapping[0].map = "header.source"

* entete.langue 0..1 CodeableConcept "Langue du contenu"
* entete.langue ^mapping[0].identity = "xt-ehr-pregnancy-history"
* entete.langue ^mapping[0].map = "header.language"
* entete.langue ^binding.description = "BCP 47"
* entete.langue ^binding.strength = #preferred

// Attributs propres à EHDSPregnancyHistory
* dateFin 0..1 dateTime "Date de fin de la grossesse"
* dateFin ^mapping[0].identity = "xt-ehr-pregnancy-history"
* dateFin ^mapping[0].map = "endDate"

* issue 0..1 CodeableConcept "Issue de la grossesse"
* issue ^mapping[0].identity = "xt-ehr-pregnancy-history"
* issue ^mapping[0].map = "outcome"
* issue ^binding.description = "SNOMED CT"
* issue ^binding.strength = #preferred

* nombreDeFoetus 0..1 integer "Nombre d'enfants ou de fœtus pour cette grossesse"
* nombreDeFoetus ^mapping[0].identity = "xt-ehr-pregnancy-history"
* nombreDeFoetus ^mapping[0].map = "numberOfFetuses"

* note 0..1 string "Notes en texte libre du professionnel de santé"
* note ^mapping[0].identity = "xt-ehr-pregnancy-history"
* note ^mapping[0].map = "note"
