// Test : héritage FHIR réel (Parent:) du modèle Xt-EHR EHDSPregnancyHistory,
// avec tentative de faire apparaître un nom français dans la colonne "Name"
// via alias/label sur les éléments hérités (le path, lui, reste figé par l'héritage).
//
// Note : xtehr.eu.ehds.models est publié en FHIR R5 (fhirVersion 5.0.0), alors que
// ce dépôt de test est en R4 (fhirVersion 4.0.1) — ce test vérifie aussi si SUSHI/
// l'IG Publisher acceptent un Parent: cross-version pour un modèle logique.

Alias: $EHDSPregnancyHistory = http://www.xt-ehr.eu/fhir/models/StructureDefinition/EHDSPregnancyHistory

Logical: HistoriqueGrossesseHeritageFR
Parent: $EHDSPregnancyHistory
Id: fr-historique-grossesse-heritage
Title: "Historique de grossesse (FR) - héritage réel avec tentative de renommage"
Description: "Test d'héritage FHIR réel du modèle Xt-EHR EHDSPregnancyHistory, avec tentative de faire apparaître un nom français dans la colonne Name via alias/label sur les éléments hérités."

* endDate ^alias[0] = "Date de fin"
* endDate ^label = "Date de fin"

* outcome ^alias[0] = "Issue de la grossesse"
* outcome ^label = "Issue de la grossesse"

* numberOfFetuses ^alias[0] = "Nombre de foetus"
* numberOfFetuses ^label = "Nombre de foetus"

* note ^alias[0] = "Remarques"
* note ^label = "Remarques"
