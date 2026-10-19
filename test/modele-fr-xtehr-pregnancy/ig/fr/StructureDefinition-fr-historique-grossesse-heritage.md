# Historique de grossesse (FR) - héritage réel avec tentative de renommage - ANS IG Example v0.1.0

## Modèle logique: Historique de grossesse (FR) - héritage réel avec tentative de renommage 

**Utilisations:**

* Ce/t/te Modèle logique n'est utilisé/e par aucun autre profil dans ce guide d'implémentation

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/ans.fhir.fr.test-minimal|current/StructureDefinition/fr-historique-grossesse-heritage)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

Cette structure est dérivée de [EHDSPregnancyHistory](http://www.xt-ehr.eu/fhir/models/1.0.0/StructureDefinition-EHDSPregnancyHistory.html) 

#### Bindings terminologiques

Cette structure est dérivée de [EHDSPregnancyHistory](http://www.xt-ehr.eu/fhir/models/1.0.0/StructureDefinition-EHDSPregnancyHistory.html) 

 **Vue différentielle** 

Cette structure est dérivée de [EHDSPregnancyHistory](http://www.xt-ehr.eu/fhir/models/1.0.0/StructureDefinition-EHDSPregnancyHistory.html) 

 **Vue d'ensembleView** 

#### Bindings terminologiques

Cette structure est dérivée de [EHDSPregnancyHistory](http://www.xt-ehr.eu/fhir/models/1.0.0/StructureDefinition-EHDSPregnancyHistory.html) 

 

Autres représentations du profil : [CSV](../StructureDefinition-fr-historique-grossesse-heritage.csv), [Excel](../StructureDefinition-fr-historique-grossesse-heritage.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "fr-historique-grossesse-heritage",
  "url" : "https://interop.esante.gouv.fr/ig/fhir/test-minimal/StructureDefinition/fr-historique-grossesse-heritage",
  "version" : "0.1.0",
  "name" : "HistoriqueGrossesseHeritageFR",
  "title" : "Historique de grossesse (FR) - héritage réel avec tentative de renommage",
  "status" : "draft",
  "date" : "2026-10-19T12:21:19+00:00",
  "publisher" : "Agence du Numérique en Santé (ANS) - 2-10 Rue d'Oradour-sur-Glane, 75015 Paris",
  "contact" : [{
    "name" : "Agence du Numérique en Santé (ANS) - 2-10 Rue d'Oradour-sur-Glane, 75015 Paris",
    "telecom" : [{
      "system" : "url",
      "value" : "https://esante.gouv.fr"
    }]
  }],
  "description" : "Test d'héritage FHIR réel du modèle Xt-EHR EHDSPregnancyHistory, avec tentative de faire apparaître un nom français dans la colonne Name via alias/label sur les éléments hérités.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR",
      "display" : "France (la)"
    }]
  }],
  "fhirVersion" : "5.0.0",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "logical",
  "abstract" : false,
  "type" : "https://interop.esante.gouv.fr/ig/fhir/test-minimal/StructureDefinition/fr-historique-grossesse-heritage",
  "baseDefinition" : "http://www.xt-ehr.eu/fhir/models/StructureDefinition/EHDSPregnancyHistory|1.0.0",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "fr-historique-grossesse-heritage",
      "path" : "fr-historique-grossesse-heritage",
      "short" : "Historique de grossesse (FR) - héritage réel avec tentative de renommage",
      "definition" : "Test d'héritage FHIR réel du modèle Xt-EHR EHDSPregnancyHistory, avec tentative de faire apparaître un nom français dans la colonne Name via alias/label sur les éléments hérités."
    },
    {
      "id" : "fr-historique-grossesse-heritage.endDate",
      "path" : "fr-historique-grossesse-heritage.endDate",
      "label" : "Date de fin",
      "alias" : ["Date de fin"]
    },
    {
      "id" : "fr-historique-grossesse-heritage.outcome",
      "path" : "fr-historique-grossesse-heritage.outcome",
      "label" : "Issue de la grossesse",
      "alias" : ["Issue de la grossesse"]
    },
    {
      "id" : "fr-historique-grossesse-heritage.numberOfFetuses",
      "path" : "fr-historique-grossesse-heritage.numberOfFetuses",
      "label" : "Nombre de foetus",
      "alias" : ["Nombre de foetus"]
    },
    {
      "id" : "fr-historique-grossesse-heritage.note",
      "path" : "fr-historique-grossesse-heritage.note",
      "label" : "Remarques",
      "alias" : ["Remarques"]
    }]
  }
}

```
