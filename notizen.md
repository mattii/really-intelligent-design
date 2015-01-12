## Best Practice

- "Variablen" werden mit `!require` angegeben, damit das Constrain nicht gebrochen wird
- So selten wie möglich eine Constrain Strength angeben, die Reihenfolge der Regeln reicht oft schon aus
- Min- und Max-Angaben werden aber mit `!require` angegeben, da es harte Grenzen sind
- Angaben left/right und width bzw. top/bottom und height wenn möglich nicht mischen
- width und height sind den Positionsangaben vorzuziehen (da weniger Angaben)
- Margin komplett vermeiden, da Margins Auswirkungen auf die Position haben

## Probleme

- Die Höhe von Elementen lässt sich nicht als "Variable" angeben, da sie von der Intrinsic-Height abhängig ist
- Höhe verhält sich komisch (siehe Modal), Bug?