jQuery(function($){
    $('#Property').selectize({
        load: function(query, callback) {
            var url = '/app-sensor-catalog/Procedure/Property.rq?results&tqx=out:sparql-json&keyword=' + encodeURIComponent(query);
            calli.getJSON(url).then(function(json){
                return json.results.bindings.map(function(bindings){
                    return {
                        value: bindings.resource.value,
                        text: bindings.label.value
                    };
                });
            }).then(callback, function(error){
                callback();
                return calli.error(error);
            });
        }
    });
});