![Logo_LEF_CI-SIS](https://user-images.githubusercontent.com/48218773/227532484-eff82649-4e42-49c6-966a-dc3ea78cf59c.png)

[![Workflow CI-build](https://github.com/nriss/test-minimal-ig/actions/workflows/fhir-workflows.yml/badge.svg)](https://github.com/nriss/test-minimal-ig/actions/workflows/fhir-workflows.yml)

Cet exemple d'Implementation Guide (IG) très simplifié sert de base pour le développement de nouveaux guides d'implémentation. La démarche d'élaboration d'un nouvel IG est expliquée dans le [wiki de ce repo](https://github.com/ansforge/IG-modele/wiki).

# Contexte

## Contexte métier du projet

Pas de contexte métier : ce repo n'est pas un projet d'IG, c'est un bac à sable utilisé pour valider rapidement des changements apportés au template ANS ([ansforge/interop-IG-style](https://github.com/ansforge/interop-IG-style), anciennement `IG-template`), sans attendre les temps de build plus longs des IGs de production.

## Contexte technique du projet

`ig.ini` référence actuellement la branche `cda-remove-js-template` du template ([PR ansforge/interop-IG-style#39](https://github.com/ansforge/interop-IG-style/pull/39)), qui retire tous les fichiers `.js` physiques du template (inlinés dans les fragments HTML) pour satisfaire la vérification de confiance de l'auto-build HL7 (`Template has file extensions: [.js]`). Ce repo sert à vérifier que l'IG se build toujours correctement avec ce template modifié, avant de merger la correction sur `cda`.

# CI/CD

Les workflows associés à ce repository (.github/workflows) permettent :

* D'executer Sushi pour vérifier la grammaire
* De faire les tests avec le validator_cli
* De publier les pages : https://nriss.github.io/test-minimal-ig/main/ig/

# Notes

Ce repo "IG-modele" a été créé à partir du repo [sample-ig](https://github.com/FHIR/sample-ig) de l'organisation GitHub FHIR.

Un commentaire ? Une remarque ? Utilisez les GitHub [issues](https://docs.github.com/fr/issues) pour indiquer vos propositions d'amélioration et de correction.

## Acronymes

* IG : Implementation Guide
* FHIR : Fast Healthcare Interoperability Resources
* HL7 : Health Level Seven

[A COMPLETER : acronymes utilisés dans le cadre de ce projet]
