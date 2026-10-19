# Test - équivalents métier FR pour un attribut anglais - ANS IG Example v0.1.0

## Logical Model: Test - équivalents métier FR pour un attribut anglais 

**Usages:**

* This Logical Model is not used by any profiles in this Specification

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/resource/ans.fhir.fr.test-minimal|current/StructureDefinition/StructureDefinition-test-attribut-fr.json)

### Formal Views of Profile Content

 [Description Differentials, Snapshots, and other representations](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](../StructureDefinition-test-attribut-fr.csv), [Excel](../StructureDefinition-test-attribut-fr.xlsx) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "test-attribut-fr",
  "url" : "https://interop.esante.gouv.fr/ig/fhir/test-minimal/StructureDefinition/test-attribut-fr",
  "version" : "0.1.0",
  "name" : "TestAttributFr",
  "title" : "Test - équivalents métier FR pour un attribut anglais",
  "status" : "draft",
  "date" : "2026-10-19T08:19:40+00:00",
  "publisher" : "Agence du Numérique en Santé (ANS) - 2-10 Rue d'Oradour-sur-Glane, 75015 Paris",
  "contact" : [{
    "name" : "Agence du Numérique en Santé (ANS) - 2-10 Rue d'Oradour-sur-Glane, 75015 Paris",
    "telecom" : [{
      "system" : "url",
      "value" : "https://esante.gouv.fr"
    }]
  }],
  "description" : "Modèle logique minimal destiné à tester, dans un IG réel, les mécanismes natifs de l'outillage FHIR permettant de faire apparaître un équivalent métier en français à côté du nom technique (anglais) d'un attribut de modèle logique : alias (Alternate Names) et mapping vers un glossaire métier.",
  "jurisdiction" : [{
    "coding" : [{
      "system" : "urn:iso:std:iso:3166",
      "code" : "FR",
      "display" : "France (la)"
    }]
  }],
  "fhirVersion" : "4.0.1",
  "mapping" : [{
    "identity" : "glossaire-metier-fr",
    "uri" : "https://interop.esante.gouv.fr/glossaire-metier-fr",
    "name" : "Glossaire métier (FR)"
  }],
  "kind" : "logical",
  "abstract" : false,
  "type" : "https://interop.esante.gouv.fr/ig/fhir/test-minimal/StructureDefinition/test-attribut-fr",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Base|4.0.1",
  "derivation" : "specialization",
  "differential" : {
    "element" : [{
      "id" : "test-attribut-fr",
      "path" : "test-attribut-fr",
      "short" : "Test - équivalents métier FR pour un attribut anglais",
      "definition" : "Modèle logique minimal destiné à tester, dans un IG réel, les mécanismes natifs de l'outillage FHIR permettant de faire apparaître un équivalent métier en français à côté du nom technique (anglais) d'un attribut de modèle logique : alias (Alternate Names) et mapping vers un glossaire métier."
    },
    {
      "id" : "test-attribut-fr.quantityPrescribed",
      "path" : "test-attribut-fr.quantityPrescribed",
      "label" : "Quantité prescrite",
      "short" : "Quantité prescrite",
      "definition" : "Quantité totale de traitement prescrite, indépendamment des séquences de prise.",
      "alias" : ["Quantité prescrite"],
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Quantity"
      }],
      "mapping" : [{
        "identity" : "glossaire-metier-fr",
        "map" : "Quantité prescrite"
      }]
    },
    {
      "id" : "test-attribut-fr.numberOfRepeats",
      "path" : "test-attribut-fr.numberOfRepeats",
      "label" : "Nombre de renouvellements",
      "short" : "Nombre de renouvellements",
      "definition" : "Nombre de renouvellements possibles de la prescription. Non renseigné si pas de limite.",
      "alias" : ["Nombre de renouvellements"],
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "integer"
      }],
      "mapping" : [{
        "identity" : "glossaire-metier-fr",
        "map" : "Nombre de renouvellements"
      }]
    },
    {
      "id" : "test-attribut-fr.validityPeriod",
      "path" : "test-attribut-fr.validityPeriod",
      "short" : "Période de validité",
      "definition" : "Période de validité de la ligne de prescription.",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Period"
      }]
    }]
  }
}

```
