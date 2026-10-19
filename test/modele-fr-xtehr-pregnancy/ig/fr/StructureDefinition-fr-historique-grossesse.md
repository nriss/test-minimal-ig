# Historique de grossesse (FR) - miroir du modèle Xt-EHR EHDSPregnancyHistory - ANS IG Example v0.1.0

## Modèle logique: Historique de grossesse (FR) - miroir du modèle Xt-EHR EHDSPregnancyHistory 

**Utilisations:**

* Ce/t/te Modèle logique n'est utilisé/e par aucun autre profil dans ce guide d'implémentation

Vous pouvez également vérifier [les usages dans le FHIR IG Statistics](https://packages2.fhir.org/xig/ans.fhir.fr.test-minimal|current/StructureDefinition/fr-historique-grossesse)

### Vues formelles du contenu du profil

 [Description des profils, des différentiels, des instantanés et de leurs représentations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

*  [Tableau différentiel (differential)](#tabs-diff) 
*  [Tableau récapitulatif (snapshot)](#tabs-snap) 
*  [Statistiques/Références](#tabs-summ) 
*  [Tous](#tabs-all) 

Cette structure est dérivée de [Base](http://hl7.org/fhir/R5/types.html#Base) 

#### Bindings terminologiques (différentiel)

#### Bindings terminologiques

Cette structure est dérivée de [Base](http://hl7.org/fhir/R5/types.html#Base) 

 **Vue différentielle** 

Cette structure est dérivée de [Base](http://hl7.org/fhir/R5/types.html#Base) 

#### Bindings terminologiques (différentiel)

 **Vue d'ensembleView** 

#### Bindings terminologiques

Cette structure est dérivée de [Base](http://hl7.org/fhir/R5/types.html#Base) 

 

Autres représentations du profil : [CSV](../StructureDefinition-fr-historique-grossesse.csv), [Excel](../StructureDefinition-fr-historique-grossesse.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "fr-historique-grossesse",
  "url" : "https://interop.esante.gouv.fr/ig/fhir/test-minimal/StructureDefinition/fr-historique-grossesse",
  "version" : "0.1.0",
  "name" : "HistoriqueGrossesseFR",
  "title" : "Historique de grossesse (FR) - miroir du modèle Xt-EHR EHDSPregnancyHistory",
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
  "description" : "Modèle logique métier en français, structurellement aligné sur le modèle européen Xt-EHR EHDSPregnancyHistory. Chaque attribut est mappé vers son équivalent anglais d'origine (identity xt-ehr-pregnancy-history).",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR",
      "display" : "France (la)"
    }]
  }],
  "fhirVersion" : "5.0.0",
  "mapping" : [{
    "identity" : "xt-ehr-pregnancy-history",
    "uri" : "https://www.xt-ehr.eu/fhir/models/en/StructureDefinition-EHDSPregnancyHistory.html",
    "name" : "Xt-EHR EHDSPregnancyHistory (EN)"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "logical",
  "abstract" : false,
  "type" : "https://interop.esante.gouv.fr/ig/fhir/test-minimal/StructureDefinition/fr-historique-grossesse",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base|5.0.0",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "fr-historique-grossesse",
      "path" : "fr-historique-grossesse",
      "short" : "Historique de grossesse (FR) - miroir du modèle Xt-EHR EHDSPregnancyHistory",
      "definition" : "Modèle logique métier en français, structurellement aligné sur le modèle européen Xt-EHR EHDSPregnancyHistory. Chaque attribut est mappé vers son équivalent anglais d'origine (identity xt-ehr-pregnancy-history)."
    },
    {
      "id" : "fr-historique-grossesse.entete",
      "path" : "fr-historique-grossesse.entete",
      "short" : "Informations générales (équivalent du header Xt-EHR)",
      "definition" : "Informations générales (équivalent du header Xt-EHR)",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Base"
      }],
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "header"
      }]
    },
    {
      "id" : "fr-historique-grossesse.entete.sujet",
      "path" : "fr-historique-grossesse.entete.sujet",
      "short" : "Patient concerné par la grossesse",
      "definition" : "Patient concerné par la grossesse",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "Base"
      }],
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "header.subject"
      }]
    },
    {
      "id" : "fr-historique-grossesse.entete.identifiant",
      "path" : "fr-historique-grossesse.entete.identifiant",
      "short" : "Identifiant métier, unique dans son système",
      "definition" : "Identifiant métier, unique dans son système",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Identifier"
      }],
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "header.identifier"
      }]
    },
    {
      "id" : "fr-historique-grossesse.entete.auteur",
      "path" : "fr-historique-grossesse.entete.auteur",
      "short" : "Auteur(s) responsable(s) de l'information fournie",
      "definition" : "Auteur(s) responsable(s) de l'information fournie",
      "min" : 0,
      "max" : "*",
      "type" : [{
        "code" : "Base"
      }],
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "header.author[x]"
      }]
    },
    {
      "id" : "fr-historique-grossesse.entete.date",
      "path" : "fr-historique-grossesse.entete.date",
      "short" : "Date (et heure éventuelle) de rédaction",
      "definition" : "Date (et heure éventuelle) de rédaction",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "dateTime"
      }],
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "header.date"
      }]
    },
    {
      "id" : "fr-historique-grossesse.entete.statut",
      "path" : "fr-historique-grossesse.entete.statut",
      "short" : "Statut de cette observation",
      "definition" : "Statut de cette observation",
      "min" : 1,
      "max" : "1",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "header.status"
      }]
    },
    {
      "id" : "fr-historique-grossesse.entete.source",
      "path" : "fr-historique-grossesse.entete.source",
      "short" : "Source de l'information (ex. patient ou son représentant)",
      "definition" : "Source de l'information (ex. patient ou son représentant)",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "header.source"
      }]
    },
    {
      "id" : "fr-historique-grossesse.entete.langue",
      "path" : "fr-historique-grossesse.entete.langue",
      "short" : "Langue du contenu",
      "definition" : "Langue du contenu",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "binding" : {
        "strength" : "preferred",
        "description" : "BCP 47"
      },
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "header.language"
      }]
    },
    {
      "id" : "fr-historique-grossesse.dateFin",
      "path" : "fr-historique-grossesse.dateFin",
      "short" : "Date de fin de la grossesse",
      "definition" : "Date de fin de la grossesse",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "dateTime"
      }],
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "endDate"
      }]
    },
    {
      "id" : "fr-historique-grossesse.issue",
      "path" : "fr-historique-grossesse.issue",
      "short" : "Issue de la grossesse",
      "definition" : "Issue de la grossesse",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "CodeableConcept"
      }],
      "binding" : {
        "strength" : "preferred",
        "description" : "SNOMED CT"
      },
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "outcome"
      }]
    },
    {
      "id" : "fr-historique-grossesse.nombreDeFoetus",
      "path" : "fr-historique-grossesse.nombreDeFoetus",
      "short" : "Nombre d'enfants ou de fœtus pour cette grossesse",
      "definition" : "Nombre d'enfants ou de fœtus pour cette grossesse",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "integer"
      }],
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "numberOfFetuses"
      }]
    },
    {
      "id" : "fr-historique-grossesse.note",
      "path" : "fr-historique-grossesse.note",
      "short" : "Notes en texte libre du professionnel de santé",
      "definition" : "Notes en texte libre du professionnel de santé",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "string"
      }],
      "mapping" : [{
        "identity" : "xt-ehr-pregnancy-history",
        "map" : "note"
      }]
    }]
  }
}

```
