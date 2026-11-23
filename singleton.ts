class Singleton {
    private static instance: Singleton;
    private count: number = 0;

    private constructor() {}

    static {
        try {
            Singleton.instance = new Singleton();
        } catch (error) {
            throw new Error("싱글톤 객체 생성 오류");
        }
    }

    public static getInstance(): Singleton {
        return Singleton.instance;
    }

    public increment(): void {
        this.count += 1;
    }

    public getCount(): number {
        return this.count;
    }
}

const s1 = Singleton.getInstance();
console.log("첫번째 객체 생성 완료");
const s2 = Singleton.getInstance();
console.log("두번째 객체 생성 완료");

console.log("두 객체 비교(===):", s1 === s2);

console.log("객체1:", s1.getCount(), " 객체2:", s2.getCount());
s1.increment();
console.log("객체1에 +1")
console.log("객체1:", s1.getCount(), " 객체2:", s2.getCount());