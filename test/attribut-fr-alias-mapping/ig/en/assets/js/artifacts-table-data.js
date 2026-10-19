window.artifactsTableData = {
  "fr": {
    "labels": {
      "type":        "Type",
      "category":    "Category",
      "useGrouping": "Use grouping",
      "clearAll":      "Clear all",
      "linkToSection": "Link to this section"
    },
    "groupDescriptions": {
      "-str-logicalmodel": "<p>Ils définissent des modèles de données qui représentent le domaine couvert par ce guide d'implémentation.</p>\n"
      ,"-str-profile": "<p>Ils définissent les contraintes sur les ressources FHIR pour les systèmes conformes à ce guide d'implémentation.</p>\n"
      ,"-str-extension": "<p>Ils définissent les extensions FHIR définies dans ce guide d'implémentation.</p>\n"
      ,"-term-valueset": "<p>Ils définissent des ensembles de codes utilisés par les systèmes conformes au présent guide d'implémentation.</p>\n"
      ,"-term-codesystem": "<p>Ils définissent les nouveaux systèmes de codes utilisés par les systèmes conformes au présent guide d'implémentation.</p>\n"
      ,"-ex-example": "<p>Il s'agit d'exemples d'instances qui montrent à quoi peuvent ressembler les données produites et consommées par des systèmes conformes au présent guide d'implémentation.</p>\n"
    },
    "rows": [
      { "p":1, "gid":"-str-logicalmodel", "g":"Structures: Modèles logiques", "n":"Test - équivalents métier FR pour un attribut anglais", "i":"test-attribut-fr", "t":"StructureDefinition", "u":"StructureDefinition-test-attribut-fr.html", "r":"StructureDefinition/test-attribut-fr", "d":"<p>Modèle logique minimal destiné à tester, dans un IG réel, les mécanismes natifs de l'outillage FHIR permettant de faire apparaître un équivalent métier en français à côté du nom technique (anglais) d'un attribut de modèle logique : alias (Alternate Names) et mapping vers un glossaire métier.</p>" },
      { "p":2, "gid":"-str-profile", "g":"Structures: Profils de ressources", "n":"Patient français", "i":"fr-patient", "t":"StructureDefinition", "u":"StructureDefinition-fr-patient.html", "r":"StructureDefinition/fr-patient", "d":"<p>Description du patient français</p>" },
      { "p":3, "gid":"-str-extension", "g":"Structures: Définitions des extensions", "n":"EyeColor", "i":"EyeColor", "t":"StructureDefinition", "u":"StructureDefinition-EyeColor.html", "r":"StructureDefinition/EyeColor", "d":"<p>Eye color extension</p>" },
      { "p":4, "gid":"-term-valueset", "g":"Terminologie: Jeux de valeurs (ValueSets)", "n":"EyeColor Value Set", "i":"EyeColorVS", "t":"ValueSet", "u":"ValueSet-EyeColorVS.html", "r":"ValueSet/EyeColorVS", "d":"<p>Different eye colors.</p>" },
      { "p":4, "gid":"-term-valueset", "g":"Terminologie: Jeux de valeurs (ValueSets)", "n":"Melting Pot Value Set", "i":"MeltingPotVS", "t":"ValueSet", "u":"ValueSet-MeltingPotVS.html", "r":"ValueSet/MeltingPotVS", "d":"<p>Melting Pot Value Set.</p>" },
      { "p":4, "gid":"-term-valueset", "g":"Terminologie: Jeux de valeurs (ValueSets)", "n":"ModifiedAdministrativeGender", "i":"ModifiedAdministrativeGender", "t":"ValueSet", "u":"ValueSet-ModifiedAdministrativeGender.html", "r":"ValueSet/ModifiedAdministrativeGender", "d":"<p>AdministrativeGender without unknown code</p>" },
      { "p":4, "gid":"-term-valueset", "g":"Terminologie: Jeux de valeurs (ValueSets)", "n":"Type Carte Value Set", "i":"TypeCarteVS", "t":"ValueSet", "u":"ValueSet-TypeCarteVS.html", "r":"ValueSet/TypeCarteVS", "d":"<p>Type Carte Value Set.</p>" },
      { "p":5, "gid":"-term-codesystem", "g":"Terminologie: Systèmes de codes (CodeSystems)", "n":"Compétences CodeSystem", "i":"competence-code-system", "t":"CodeSystem", "u":"CodeSystem-competence-code-system.html", "r":"CodeSystem/competence-code-system", "d":"<p>Compétences des professionnels de santé.</p>" },
      { "p":5, "gid":"-term-codesystem", "g":"Terminologie: Systèmes de codes (CodeSystems)", "n":"Type de carte", "i":"type-carte-code-system", "t":"CodeSystem", "u":"CodeSystem-type-carte-code-system.html", "r":"CodeSystem/type-carte-code-system", "d":"<p>Type de carte professionnelle et personnelle.</p>" },
      { "p":6, "gid":"-ex-example", "g":"Exemple: Exemples d'instances", "n":"frpatient-exemple", "i":"frpatient-exemple", "t":"Patient", "u":"Patient-frpatient-exemple.html", "r":"Patient/frpatient-exemple", "d":"<p>Exemple d'un patient français</p>" }
    ]
  },
  "en": {
    "labels": {
      "type":        "Type",
      "category":    "Category",
      "useGrouping": "Use grouping",
      "clearAll":      "Clear all",
      "linkToSection": "Link to this section"
    },
    "groupDescriptions": {
      "-str-logicalmodel": "<p>These define data models that represent the domain covered by this implementation guide in more business-friendly terms than the underlying FHIR resources.</p>\n"
      ,"-str-profile": "<p>These define constraints on FHIR resources for systems conforming to this implementation guide.</p>\n"
      ,"-str-extension": "<p>These define constraints on FHIR data types for systems conforming to this implementation guide.</p>\n"
      ,"-term-valueset": "<p>These define sets of codes used by systems conforming to this implementation guide.</p>\n"
      ,"-term-codesystem": "<p>These define new code systems used by systems conforming to this implementation guide.</p>\n"
      ,"-ex-example": "<p>These are example instances that show what data produced and consumed by systems conforming with this implementation guide might look like.</p>\n"
    },
    "rows": [
      { "p":1, "gid":"-str-logicalmodel", "g":"Structures: Logical Models", "n":"Test - équivalents métier FR pour un attribut anglais", "i":"test-attribut-fr", "t":"StructureDefinition", "u":"StructureDefinition-test-attribut-fr.html", "r":"StructureDefinition/test-attribut-fr", "d":"<p>Modèle logique minimal destiné à tester, dans un IG réel, les mécanismes natifs de l'outillage FHIR permettant de faire apparaître un équivalent métier en français à côté du nom technique (anglais) d'un attribut de modèle logique : alias (Alternate Names) et mapping vers un glossaire métier.</p>" },
      { "p":2, "gid":"-str-profile", "g":"Structures: Resource Profiles", "n":"Patient français", "i":"fr-patient", "t":"StructureDefinition", "u":"StructureDefinition-fr-patient.html", "r":"StructureDefinition/fr-patient", "d":"<p>Description du patient français</p>" },
      { "p":3, "gid":"-str-extension", "g":"Structures: Extension Definitions", "n":"EyeColor", "i":"EyeColor", "t":"StructureDefinition", "u":"StructureDefinition-EyeColor.html", "r":"StructureDefinition/EyeColor", "d":"<p>Eye color extension</p>" },
      { "p":4, "gid":"-term-valueset", "g":"Terminology: Value Sets", "n":"EyeColor Value Set", "i":"EyeColorVS", "t":"ValueSet", "u":"ValueSet-EyeColorVS.html", "r":"ValueSet/EyeColorVS", "d":"<p>Different eye colors.</p>" },
      { "p":4, "gid":"-term-valueset", "g":"Terminology: Value Sets", "n":"Melting Pot Value Set", "i":"MeltingPotVS", "t":"ValueSet", "u":"ValueSet-MeltingPotVS.html", "r":"ValueSet/MeltingPotVS", "d":"<p>Melting Pot Value Set.</p>" },
      { "p":4, "gid":"-term-valueset", "g":"Terminology: Value Sets", "n":"ModifiedAdministrativeGender", "i":"ModifiedAdministrativeGender", "t":"ValueSet", "u":"ValueSet-ModifiedAdministrativeGender.html", "r":"ValueSet/ModifiedAdministrativeGender", "d":"<p>AdministrativeGender without unknown code</p>" },
      { "p":4, "gid":"-term-valueset", "g":"Terminology: Value Sets", "n":"Type Carte Value Set", "i":"TypeCarteVS", "t":"ValueSet", "u":"ValueSet-TypeCarteVS.html", "r":"ValueSet/TypeCarteVS", "d":"<p>Type Carte Value Set.</p>" },
      { "p":5, "gid":"-term-codesystem", "g":"Terminology: Code Systems", "n":"Compétences CodeSystem", "i":"competence-code-system", "t":"CodeSystem", "u":"CodeSystem-competence-code-system.html", "r":"CodeSystem/competence-code-system", "d":"<p>Compétences des professionnels de santé.</p>" },
      { "p":5, "gid":"-term-codesystem", "g":"Terminology: Code Systems", "n":"Type de carte", "i":"type-carte-code-system", "t":"CodeSystem", "u":"CodeSystem-type-carte-code-system.html", "r":"CodeSystem/type-carte-code-system", "d":"<p>Type de carte professionnelle et personnelle.</p>" },
      { "p":6, "gid":"-ex-example", "g":"Example: Example Instances", "n":"frpatient-exemple", "i":"frpatient-exemple", "t":"Patient", "u":"Patient-frpatient-exemple.html", "r":"Patient/frpatient-exemple", "d":"<p>Exemple d'un patient français</p>" }
    ]
  }
};
