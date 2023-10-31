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

routes.get('/administrador', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM proyecto_gimnasio.administradores', (err, rows)=>{
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

            res.send('Nuevo administrador añadido!')
        })
    })
})

routes.post('/administrador', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO proyecto_gimnasio.administradores set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Cliente añadido!')
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

routes.put('/administrador/:usuario', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE proyecto_gimnasio.administradores set ? WHERE usuario = ?', [req.body, req.params.usuario], (err, rows)=>{
            if(err) return res.send(err)

            res.send('Datos del administrador actualizados!')
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

module.exports = routes