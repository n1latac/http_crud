class Thing{
    static _tableName = 'thing';
    static _client = null;
    static name = 'Thing'

    static _atributes={
        body: 'string'
    }


    static async create(insertValues){
        const insertAttr = Object.entries(this._atributes)
        .filter(([attr,domain])=> attr in insertValues)
        .map(([attr])=> attr);

        const insertSchemaStr = insertAttr.map((attr)=>`"${attr}"`).join(',');

        const insertValueString = insertAttr.map(attr => {
            const value = insertValues[attr];
            return typeof value === 'string' ? `'${value}'` : value;
        }).join(',');
        const str = `INSERT INTO ${this._tableName} (${insertSchemaStr})
            VALUES (${insertValueString}) RETURNING *;`
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