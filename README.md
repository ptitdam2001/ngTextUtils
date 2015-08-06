# ngTextUtils
A list of filters, directives about text

# Usage

Truncate in function of characters number : 

```
{{ truncate_text | truncateCharacters:20: false}}
```
Truncate in function of words number: 

```
{{ truncate_text | truncateWords:5:ignoreSpaces }}
```
