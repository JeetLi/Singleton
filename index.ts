class SingletonLocalStorage {
  private static instance: SingletonLocalStorage;
  private constructor() {};
   public static getInstanse(): SingletonLocalStorage {
    if (SingletonLocalStorage.instance) {
      return SingletonLocalStorage.instance;
    } else {
      return (SingletonLocalStorage.instance = new SingletonLocalStorage());
    }
  }
  setItem(key:string,value:string):void {  
    localStorage.setItem(key, value)
  }
  getItem(key: string): string | null {
    return localStorage.getItem(key)
  }
  removeItem(key: string): void{
    return localStorage.removeItem(key)
  }
   clear(): void {
    localStorage.clear() 
   }
   key(index: number): string | null {
    return localStorage.key(index)
   }
   getLenght():number {
    return localStorage.length
   }
}

const obj =  SingletonLocalStorage.getInstanse()
obj.setItem( '1' , 'alex')
console.log(obj.getItem('1'))
console.log(obj.key(0))

// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
// length – количество элементов в хранилище.