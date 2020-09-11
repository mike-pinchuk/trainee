const IMAGE_API_URL = 'https://picsum.photos/200/300'
const imageElement = document.getElementById('image')

// 1. Реализовать упрощенный вариант функции fetch() используя Promise + XHR (XMLHttpRequest), в response должны быть минимум реализованы методы json() и blob()

function myFetch(url) {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);

            xhr.responseType = 'blob';

            xhr.onload = () => {
                xhr.status === 200 ? resolve(xhr.response) : reject(`Loading error: ${xhr.statusText}`)
            }
            xhr.onerror = () => reject('Network error')

            xhr.send()
        }
        catch (err) { reject(err.message) }
    })
}

// 2. Загрузить изображение, преобразовать его в Blob и используя FileReader преобразовать в формат DataUrl, далее используя функцию insertImage вставить DataUrl в тег img (добавить обработку ошибок)
myFetch(IMAGE_API_URL)
    .then(response => {
        return response.blob();
    }).then((blob) => {
        let reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onload = () => {
            console.log(reader.result)
        }
    })

function insertImage(src) {
    imageElement.src = src
}

// insertImage(myFetch)