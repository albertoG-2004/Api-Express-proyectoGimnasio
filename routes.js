const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM proyecto_gimnasio.clientes', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO proyecto_gimnasio.clientes set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Cliente añadido!')
        })
    })
})

routes.delete('/:id_cliente', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM proyecto_gimnasio.clientes WHERE id_cliente = ?', [req.params.id_cliente], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Cliente eliminado!')
        })
    })
})

routes.put('/:id_cliente', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE proyecto_gimnasio.clientes set ? WHERE id_cliente = ?', [req.body, req.params.id_cliente], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Datos del cliente actualizados!')
        })
    })
})

module.exports = routes