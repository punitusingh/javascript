const request=require('superagent');
const fs = require('fs');

const validate=(productId)=>{
    request.get(`https://www.macys.com/xapi/digital/v1/product/${productId}`)
        .then((res)=>{
            const [product]=res.body.product;

            if(product.traits.traitsMaps && product.relationships.upcs){
                const { upcs } = product.relationships;

                const missingUpcMapping=Object.values(product.traits.traitsMaps.upcMap).filter(upc => !upcs[upc]);
                if(missingUpcMapping.length > 0 ){
                    fs.writeFile(`${productId}-problem.json`, JSON.stringify(product), function(err) {
                        if(err) {
                            return console.log(err);
                        }
                        console.log(`${productId}-problem.json is written successfully!`);
                    });

                }
            }

        });
};


const lineReader = require('readline').createInterface({
    input: fs.createReadStream('productId.json')
});

lineReader.on('line', function (line) {
    const {productId} = JSON.parse(line).result;
    console.log(`Validating product ${productId}`);
    validate(productId)
});




