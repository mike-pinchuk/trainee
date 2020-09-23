const IMAGE_API_URL = 'https://picsum.photos/200/300'
const imageElement = document.getElementById('image')

// 1. Реализовать упрощенный вариант функции fetch() используя Promise + XHR (XMLHttpRequest), в response должны быть минимум реализованы методы json() и blob()

function myFetch(url) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.responseType = 'blob';
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(new Error(`Error ${xhr.status}: ${xhr.statusText}`))
            } else {
                const response = {
                    data: xhr.response,
                    json() {
                        return new Promise((resolve, reject) => {
                            const reader = new FileReader()

                            reader.onload = () => {
                                resolve(JSON.parse(reader.result))
                            }

                            reader.readAsText(this.data)
                        })

                    },
                    blob() {
                        return Promise.resolve(this.data)
                    }
                }
                resolve(response)
            }
        }

        xhr.onerror = () => reject('Network error')
        xhr.send()
    })
}

// 2. Загрузить изображение, преобразовать его в Blob и используя FileReader преобразовать в формат DataUrl, далее используя функцию insertImage вставить DataUrl в тег img (добавить обработку ошибок)
myFetch(IMAGE_API_URL)
    .then(response => {
        return response.blob();
    }).then((result) => {
        const reader = new FileReader();

        reader.onload = () => {
            insertImage(reader.result)
        }
        reader.readAsDataURL(result);
        return result
    }).catch(e => console.log(`Error: ${e}`))

function insertImage(src) {
    imageElement.src = src
}
