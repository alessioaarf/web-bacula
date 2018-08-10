const tile_count = document.querySelector('tbody.teste');
const tile_count2 = document.querySelector('tbody.test2');
const tile_count3 = document.querySelector('.oi .card');

const url = `php/preg.php`
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(rows){
        for (const row of rows){
            const rowView = `<tr>
            <td>${row.jobid}</td>
          </tr>`
            tile_count.insertAdjacentHTML('beforeend', rowView)
        }
    })



    const url2 = `php/3.php`
    fetch(url2)
    .then(function(res){
        return res.json()
    })
    .then(function(rows){
        for (const row of rows){
            const rowView = `<tr>
            <td>${row.data}</td>
          </tr>`
            tile_count2.insertAdjacentHTML('beforeend', rowView)
        }
    })

    const url3 = `php/bytes.php`
    fetch(url3)
    .then(function(res){
        return res.json()
    })
    .then(function(rows){
        for (const row of rows){
            const rowView = `<div class="card-body p-3 text-center">
            <div class="text-muted mb-4 text-center text-red">
             Tamanho do backup
            </div>
            <div class="h1 m-0" class="a">${row.bytes}</div>
            <div class="progress" style="height: .5rem" >
                <div class="progress-bar bg-green" role="progressbar" style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>`
            tile_count3.insertAdjacentHTML('beforeend', rowView)
        }
    })