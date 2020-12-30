window.addEventListener('load',()=>{
    const table = document.querySelector('.projects__table');
    (()=>{
        fetch('https://api.github.com/users/RodrigoAlanisWeb/repos?sort=created')
             .then(res => res.json())
             .then(data => {
                 for (let index = 0; index < 5; index++) {
                     const tr = document.createElement('tr');
                     const date = document.createElement('td');
                     date.append(data[index].created_at);
                     const title = document.createElement('td');
                     const a = document.createElement('a');
                     a.setAttribute('href',data[index].html_url);
                     a.append(data[index].name);

                     title.append(a);

                     tr.append(date);
                     tr.append(title);

                     table.append(tr);
                 }
             })
             .catch(err => console.log(err))
    })()
})