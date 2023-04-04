class Thing{
    static _tableName = 'thing';
    static _client = null;
    static name = 'Thing'

    static _attributes={
        body: 'string'
    }


    static async create(insertValues) {
        console.log(this._client);

        const insertAttr = Object.entries(this._attributes)
         .filter(([attr, domain])=> attr in insertValues)
         .map(([attr]) => attr);
         console.log(insertAttr);
 
         const insertSchemaStr = insertAttr.map(attr => `"${attr}"`).join(',');

         const insertValueStr = insertAttr.map(attr => {
             const value = insertValues[attr];
            return typeof value === 'string' ? `'${value}'` : value;
         }).join(',');
         const str = `INSERT INTO ${this._tableName} (${insertSchemaStr})
                             VALUES (${insertValueStr}) RETURNING *;`
         const {rows} = await this._client.query(str);
         return rows;
     }


    static async updateByPk (updateObj){
        const {id,updateValues} = updateObj;
        const insertAttr = Object.entries(this._atributes)
        .filter(([attr,domain])=> attr in updateValues)
        .map(([attr])=> attr);


        const insertValueString = insertAttr.map(attr => {
            const value = updateObj[attr];
            return `${attr} = ${typeof value === 'string' ? `'${value}'` : value}`
        }).join(',');
        const {rows} = `UPDATE ${this._tableName}
                        SET ${insertValueString}
                        WHERE id = ${id};`

        return rows; 
    }


    static async findAllThings(){
        const {rows} = await this._client.query(`SELECT * FROM ${this._tableName}`);
        return rows;
    }
    static async findByPk(Pk){
        const {rows} = await this._client.query(`SELECT * FROM ${THIS._tableName} WHERE id = ${Pk};`);
        return rows
        //SELECT * FROM TABLE WHERE id = id
    }

    static async deleteByPk(pk) {
        const {rows} = this._client.query(`DELETE * FROM ${this._tableName}
                                            WHERE id = ${pk};`)
        return rows
    }
    
}
module.exports = Thing;