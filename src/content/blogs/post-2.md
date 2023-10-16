---
title: Post 2
description: I was literally going to use zod in my layouts for frontmatter schema validation and now that exact thing is integrated within astro.
publishDate: 2023-01-02
author: Zedan Saheer
---

# Tot certe post illa defensae in tepida

![Sample image](https://picsum.photos/400 "Optional title")

## Ille solo

Lorem markdownum **pande**, dei mori penates causam, denique liquit, in? Cristae
quicquid patriam. Manusque _iam dum_. Gelidis _homines_ iuvenis **dextram**
pressant, bracchiaque oris: peccasse primitias? Mutua uteroque classe; ruricolae
sustinet, nisi ibat tamen.

## Quam nymphae

Laesae videres obtulit; annos **iam**. Ipsa datura undis digitos invidere ut
aedificat annis feretur quicquam dicere: feret.

```js
const kNearestNeighbors = (data, labels, point, k = 3) => {
  const kNearest = data
    .map((el, i) => ({
      dist: Math.hypot(...Object.keys(el).map((key) => point[key] - el[key])),
      label: labels[i],
    }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, k);

  return kNearest.reduce(
    (acc, { label }, i) => {
      acc.classCounts[label] =
        Object.keys(acc.classCounts).indexOf(label) !== -1
          ? acc.classCounts[label] + 1
          : 1;
      if (acc.classCounts[label] > acc.topClassCount) {
        acc.topClassCount = acc.classCounts[label];
        acc.topClass = label;
      }
      return acc;
    },
    {
      classCounts: {},
      topClass: kNearest[0].label,
      topClassCount: 0,
    }
  ).topClass;
};
const data = [
  [0, 0],
  [0, 1],
  [1, 3],
  [2, 0],
];
const labels = [0, 1, 1, 0];

kNearestNeighbors(data, labels, [1, 2], 2); // 1
kNearestNeighbors(data, labels, [1, 0], 2); // 0
```

## Templum tumulis fontes

Viri hostem carnes turpis, quoniam penetrabile linguae mento nostra, splendida
est et abiit si. Hiscere litoris vatis feriendus pectora. Ille eam est Peripha
muneris opes praerupit balatum Perseus questus: est qua. Comaeque caluere,
frigora Phoebi. Caelo iam magis, _laetum collibus constitit_ si fas viveret.

## Coniuge quoque da nati acumine Thetidi homines

[Vestris late nautas](http://www.suis-tribus.com/) primum stagna multorumque
Caenea gaudia et post centum Mycenida conlegit a strepitu est. Potura proferri
reppulit liceret; rigidum marem, _refert rogem_ mea satis quoque _levibus_
laudatve litoraque _haustos ab prolem_. Aliquem inploraret nostras vix auras
ante addiderat putat aethere meis Cadmus auro.

Cornua rapta adest quidem undis supplice Agamemnona deos accepisse perdere
saevit mora sit quoque **viri** formosus _herbas ac_ cum porreximus. Humanis ab
**silva tellus lacertis** arbore fallere Phocaico murmur senserat parva. Servent
pondere cornua verba igne animo tacito, ilice nec, arator Nessus uni torumque
levius?

## Viae memor Tellus exierant saxis

Teque latratibus mens tum Phineus vidit lustrat aera, coeunt quem flumen,
coniugis, **numeris**. Domum coma tetigit **Troezenius viros** faciemque haec
imagine oro miserabile in subtemen modo Eumenidum fecisses.

1. Crede o petisti loqui
2. Sed nobis celanda
3. Volat quoque

Messes amorem paulatim et exiguo vertor, visa noluit: prodidit. Blanditus
mactatos Cocinthia Phineus disparibus deus iacuere sensit fidere, quoque senis
redeuntque vati priorum! Calido pendentia tamen. Abesse ut Iacchus veni
videretur bracchia dixerat temptat est puppe aram simulati cauda indignamque
populos per.
