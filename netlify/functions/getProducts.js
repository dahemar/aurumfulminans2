const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    try {
        const productsDir = path.join(process.cwd(), '_products');
        const files = fs.readdirSync(productsDir);
        
        const products = files.map(file => {
            const content = fs.readFileSync(path.join(productsDir, file), 'utf8');
            const frontmatter = content.split('---')[1];
            const data = {};
            
            frontmatter.split('\n').forEach(line => {
                const [key, ...value] = line.split(':');
                if (key && value) {
                    data[key.trim()] = value.join(':').trim();
                }
            });
            
            return {
                ...data,
                slug: file.replace('.md', '')
            };
        });

        return {
            statusCode: 200,
            body: JSON.stringify(products)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
}; 