!function(){var e={delimiters:{thousands:".",decimal:","},abbreviations:{thousand:"k",million:"mm",billion:"b",trillion:"t"},ordinal:function(e){var n=e%10;return 1===n||3===n?"er":2===n?"do":7===n||0===n?"mo":8===n?"vo":9===n?"no":"to"},currency:{symbol:"€"}};"undefined"!=typeof module&&module.exports&&(module.exports=e),"undefined"!=typeof window&&this.numeral&&this.numeral.language&&this.numeral.language("es",e)}();