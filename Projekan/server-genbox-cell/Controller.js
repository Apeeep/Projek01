const db_config = require('./DB_Config')

const Create = (req, res) => {
    
    let result = {
        Saldo : req.body.Saldo,
        Tanggal : req.body.Tanggal,
        Provider : req.body.Provider,
        Nominal : req.body.Nominal,
        Nomor_HP : req.body.Nomor_HP
    }
    
    console.log(req.body)
    const db_config = require('./DB_Config')
    const sql = `INSERT INTO pulsa (Saldo, Tanggal, Provider, Nominal, Nomor_HP)
                VALUES (
                    '${result.Saldo}', 
                    '${result.Tanggal}', 
                    '${result.Provider}', 
                    '${result.Nominal}',
                    '${result.Nomor_HP}'
                    )`

            db_config.query(sql, (error, result) => {
                if ( error ) throw error
                res.status(200).json({
                    message : "Data Berhasil di post",
                    data : result
                })
            })

}

const Read = (req, res) => {
    const sql = `SELECT * FROM pulsa`

    db_config.query(sql, (error, result) => {
        if ( error ) throw error
        res.status(200).json({
            message : "Data berhasil di get",
            data : result
        })
    })
}

const Update = (req, res) => {

    let id = req.params.id

    let result = {
        Saldo : req.body.Saldo,
        Tanggal : req.body.Tanggal,
        Provider : req.body.Provider,
        Nominal : req.body.Nominal,
        Nomor_HP : req.body.Nomor_HP
    }

    const db_config = require('./DB_Config')
    const sql = `UPDATE pulsa SET 
                    Saldo='${result.Saldo}', 
                    Tanggal='${result.Tanggal}', 
                    Provider='${result.Provider}', 
                    Nominal='${result.Nominal}' 
                    Nomor_HP='${result.Nomor_HP}' 
                WHERE id='${id}'`
    
    db_config.query(sql, (error, result) => {
        if ( error ) throw error
        res.status(200).json({
            message : "Data berhasil di update",
            data : result
        })
    })

}

const Detele = (req, res, next) => {

    let id = req.params.id;

    const db_config = require('./DB_Config')
    const sql = `DELETE FROM pulsa WHERE id='${id}'`
    

    db_config.query(sql, (error, result) => {
        if ( error ) throw error
        res.status(200).json({
            message : "Data berhasil di hapus"
        })
    })
}

module.exports = { Create, Read, Update, Detele }