Logical: TestAttributFr
Id: test-attribut-fr
Title: "Test - équivalents métier FR pour un attribut anglais"
Description: "Modèle logique minimal destiné à tester, dans un IG réel, les mécanismes natifs de l'outillage FHIR permettant de faire apparaître un équivalent métier en français à côté du nom technique (anglais) d'un attribut de modèle logique : alias (Alternate Names) et mapping vers un glossaire métier."

// Déclaration du mapping vers un glossaire métier FR (rendu natif dans l'onglet "Mappings" de la page générée)
* ^mapping[0].identity = "glossaire-metier-fr"
* ^mapping[0].uri = "https://interop.esante.gouv.fr/glossaire-metier-fr"
* ^mapping[0].name = "Glossaire métier (FR)"

* quantityPrescribed 0..1 Quantity "Quantité prescrite" "Quantité totale de traitement prescrite, indépendamment des séquences de prise."
* quantityPrescribed ^alias[0] = "Quantité prescrite"
* quantityPrescribed ^label = "Quantité prescrite"
* quantityPrescribed ^mapping[0].identity = "glossaire-metier-fr"
* quantityPrescribed ^mapping[0].map = "Quantité prescrite"

* numberOfRepeats 0..1 integer "Nombre de renouvellements" "Nombre de renouvellements possibles de la prescription. Non renseigné si pas de limite."
* numberOfRepeats ^alias[0] = "Nombre de renouvellements"
* numberOfRepeats ^label = "Nombre de renouvellements"
* numberOfRepeats ^mapping[0].identity = "glossaire-metier-fr"
* numberOfRepeats ^mapping[0].map = "Nombre de renouvellements"

// Attribut témoin, sans alias ni mapping, pour comparaison dans le rendu
* validityPeriod 0..1 Period "Période de validité" "Période de validité de la ligne de prescription."
