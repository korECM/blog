---
emoji: ๐ถ
title: Lombok์ด๋?
date: '2021-08-28 15:00:00'
author: ์ฟ ํค
tags: Java Lombok
categories: Java
---

## Lombok์ด๋?

`Lombok`์ด๋ Java์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก ๋ฐ๋ณต๋๋ ๋ฉ์๋๋ฅผ `Annotation`์ ์ฌ์ฉํด์ ์๋์ผ๋ก ์์ฑํด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ค. ๋ณดํต DTO๋ Model, Entity์ ๊ฒฝ์ฐ ์ฌ๋ฌ ์์ฑ์ด ์กด์ฌํ๊ณ  ์ด๋ค์ด ๊ฐ์ง๋ ํ๋กํผํฐ์ ๋ํด์ Getter๋ Setter, ์์ฑ์ ๋ฑ์ ๋งค๋ฒ ์์ฑํด์ค์ผ ํ๋ ๊ฒฝ์ฐ๊ฐ ๋ง์๋ฐ ์ด๋ฌํ ๋ถ๋ถ์ ์๋์ผ๋ก ๋ง๋ค์ด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ผ๊ณ  ํ  ์ ์๋ค.

๋ํ DTO์ ๊ฐ์ด ์์ฃผ ๋ณ๊ฒฝ๋๋ ํด๋์ค์ ๊ฒฝ์ฐ ๋ฉค๋ฒ ๋ณ์๊ฐ ์ถ๊ฐ๋๊ฑฐ๋ ์์ด์ง ๋๋ง๋ค Getter, Setter, ์์ฑ์ ๋ฑ์ ์์ ํด์ค์ผ ํ๋ ๊ฒฝ์ฐ๊ฐ ๋ฐ์ํ๋ค. ์ด๋ฌํ ๊ฒฝ์ฐ์๋ `Lombok`์ ์ด์ฉํ๋ฉด ๋จ์ํ ํ๋กํผํฐ๋ฅผ ์ถ๊ฐํ๊ณ  ์ญ์ ํ๋ ๊ฒ๋ง์ผ๋ก๋ ์ถฉ๋ถํ๋ค.

`Lombok`์ ์ด์ฉํด์ ์์ฑํ ์ฝ๋๋ ์ปดํ์ผ ๊ณผ์ ์์ `Annotation`์ ์ด์ฉํด์ ์ฝ๋๋ฅผ ์์ฑํ๊ณ  ์ด๋ฐ ๊ฒฐ๊ณผ๋ฌผ์ด `.class`์ ๋ด๊ธฐ๊ฒ ๋๋ ๊ฒ์ด๋ค.

๊ท์ฐฎ์ ๊ณผ์ ์ ์ค์ฌ์ฃผ๊ณ  ๋ฐ๋ณต๋๋ ์ฝ๋ ์์ฑ์ ๋์  ํด์ค๋ค๋ ์ ์์ ๋ง์ ๊ฐ๋ฐ์๋ค์ด ์ ํธํ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ด์ง๋ง ํธ๋ถํธ๊ฐ ๊ฐ๋ฆฌ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ด๊ธฐ๋ ํ๋ฏ๋ก ํ ํ๋ก์ ํธ์ ๋์ํ๋ ๊ฒฝ์ฐ ์ฃผ์ํด์ผ ํ๋ค.

๋ํ ๋จ์ํ `Annotation`์ ์ด์ฉํด์ ์ฝ๋๋ฅผ ์์ฑํด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ด๋ฏ๋ก ๊ฐ `API`๊ฐ ์ด๋ค์์ผ๋ก ์๋ํ๋์ง ์์งํ ์ฑ๋ก ์ฌ์ฉํ๋ ๊ฒ์ด ์ข๋ค. ๋ค๋ฅธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ์ถฉ๋์ด ๋ฐ์ํ  ์๋ ์๊ณ  ๋ด๊ฐ ์ํ์ง ์๋ ๋ฐฉ์์ผ๋ก ์๋ํ  ์๋ ์๊ธฐ ๋๋ฌธ์ด๋ค.

์๋ฅผ ๋ค์ด `@Data`๋ `@ToString`์ ๊ฒฝ์ฐ ์ํ ์ฐธ์กฐ ๋๋ ๋ฌดํ ์ฌ๊ท ํธ์ถ๋ก ์ธํด `StackOverFlowError`๊ฐ ๋ฐ์ํ  ์๋ ์๋ค. ์ด๋ ์๋์ ์์ธํ๊ฒ ์ดํด๋ณด๊ฒ ๋ค.

## Lombok ์ฌ์ฉ๋ฒ

### @Getter, @Setter

ํ๋์ ๋ํ `getter`, `setter`๋ฅผ ์๋์ผ๋ก ์์ฑํด์ฃผ๋ `Annotation`์ด๋ค. ๋ง์ฝ ํ๋์ ์ด๋ฆ์ด `name`์ด๋ผ๋ฉด `getName()`๊ณผ `setName()`์ ์ถ๊ฐํด์ค๋ค.

์๋ฅผ ๋ค๋ฉด ์๋์ ๊ฐ๋ค.

```java
// Code
class Person{
    @Getter
    @Setter
    private String name;
}

// Compiled
class Person {
    private String name;

    Person() {
    }

    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }
}
```

์์ ๊ฐ์ด `Annotation`์ด ๋ช์๋ ํ๋์ ๋ํด `getX()`, `setX()`๋ฅผ ์ถ๊ฐํด์ฃผ๋ ๊ฒ์ ์ ์ ์๋ค.

์๋์ผ๋ก ์์ฑ๋๋ `getter`์ `setter`์ ๊ฒฝ์ฐ ๊ธฐ๋ณธ์ `public`์ด๋ฉฐ `AccessLevel`์ ๋ช์ํ ๊ฒฝ์ฐ `PUBLIC`, `PROTECTED`, `PACKAGE`, `PRIVATE` ๋ฑ์ผ๋ก๋ ์์ฑํ  ์ ์๋ค.

```java
// Code
class Person{
    @Getter(AccessLevel.PRIVATE)
    @Setter(AccessLevel.PROTECTED)
    private String name;
}
```

๋ํ `@Getter` ,`@Setter`๋ฅผ ํด๋์ค์ ๋ช์ํ  ์๋ ์๋ค. ์ด ๊ฒฝ์ฐ ๋ชจ๋  `non-static` ํ๋์ ๋ํด `getter`์ `setter`๋ฅผ ์ถ๊ฐํด์ค๋ค.

```java
@Getter
@Setter
class Person{
    private String name;
    private int age;
}
```

๋ง์ฝ ์ด๋ฆ์ด ๊ฐ๊ณ  ๋งค๊ฐ๋ณ์์ ์๊ฐ ๊ฐ์ ๋ฉ์๋๊ฐ ์ด๋ฏธ ์กด์ฌํ๋ค๋ฉด ๋ฉ์๋๊ฐ ์์ฑ๋์ง ์๋๋ค.

์๋ฅผ ๋ค์ด `getName(String... names)`๊ฐ ์ด๋ฏธ ์กด์ฌํ๋ค๋ฉด `getName()` ๋ฉ์๋๋ ๊ธฐ์ ์ ์ผ๋ก ๊ฐ๋ฅํ๋๋ผ๋ ์์ฑ๋์ง ์๋๋ค. ์ด๋ ๋ฉ์๋ ์ฌ์ฉ์ ํผ๋์ ๋ฐฉ์งํ๊ธฐ ์ํด์๋ค. ๋ฉ์๋๊ฐ ์์ฑ๋์ง๋ ์์ง๋ง ์ด์ ๋ํด ๊ฒฝ๊ณ  ๋ฉ์์ง๋ก ์๋ ค์ค๋ค.

๋ํ ์ด๊ฑฐํ ๋ณ์์ `@Getter`๋ ์ฌ์ฉํ  ์ ์์ง๋ง `@Setter`๋ ์ฌ์ฉํ  ์ ์๋ค.

### @NonNull

๋ฉ์๋๋ ์์ฑ์์ ๋งค๊ฐ๋ณ์์ `@NonNull`์ ์ฌ์ฉํ๋ฉด `lombok`์ด null check๋ฅผ ํด์ค๋ค.

```java
// code
class Person{
    private String name;
    private int age;

    public Person(@NonNull String name, int age) {
        this.name = name;
        this.age = age;
    }
}
// build
class Person {
    private String name;
    private int age;

    public Person(@NonNull String name, int age) {
        if (name == null) {
            throw new NullPointerException("name is marked non-null but is null");
        } else {
            this.name = name;
            this.age = age;
        }
    }
}
```

### @ToString

`@ToString`์ด ๋ถ์ ํด๋์ค๋ `lombok`์ด `toString()` ๋ฉ์๋๋ฅผ ์์ฑํด์ค๋ค. ๊ธฐ๋ณธ์ ์ผ๋ก๋ ํด๋์ค ์ด๋ฆ๊ณผ ๊ฐ ํ๋์ ๋ํ ๊ฐ์ `,`์ผ๋ก ๊ตฌ๋ถํด์ ์ถ๋ ฅํด์ค๋ค.

```java
// code
@ToString
class Person{
    private String name;
    private int age;
}
// build
// ํ์์๋ ๋ถ๋ถ์ ์๋ต
class Person {
    private String name;
    private int age;
    public String toString() {
        return "Person(name=" + this.name + ", age=" + this.age + ")";
    }
}
```

`includeFieldNames`๋ฅผ ์ค์ ํ๋ฉด ๊ฐ ํ๋์ ์ด๋ฆ๊ณผ ํจ๊ป ๊ฐ์ ํ์ธํ  ์ ์๋ค. `true`๊ฐ ๊ธฐ๋ณธ๊ฐ์ด๋ค.

```java
// code
@ToString(includeFieldNames = false)
class Person{
    private String name;
    private int age;
}
// build
class Person {
    private String name;
    private int age;
    public String toString() {
        return "Person(" + this.name + ", " + this.age + ")";
    }
}
```

๊ธฐ๋ณธ์ ์ผ๋ก ๋ชจ๋  `non-static` ํ๋๋ `toString()`์ ํฌํจ๋์ง๋ง ์ํ๋ค๋ฉด ๋ช๋ช ํ๋๋ `@ToString.Exclude`๋ฅผ ์ฌ์ฉํด์ ์ ์ธํ  ์ ์๋ค. ์๋๋ฉด `@ToString(onlyExplicitlyIncluded = true)`๋ฅผ ์ฌ์ฉํด์ ๋ช์์ ์ผ๋ก `@ToString.Include`๊ฐ ๋ถ์ ํ๋๋ง ํฌํจ์ํฌ ์๋ ์๋ค.

```java
// code
@ToString()
class Person{
    @ToString.Exclude
    public static String type = "human";
    private String name;
}
// build
class Person {
    public static String type = "human";
    private String name;
    public String toString() {
        return "Person(name=" + this.name + ")";
    }
}
```

`callSuper`๋ฅผ ์ค์ ํ๋ฉด ์ํผ ํด๋์ค์ `toString` ๋ฐํ๊ฐ์ ํฌํจํ  ์๋ ์๋ค.

๋ค๋ฅธ ๋ฉ์๋์ ์ถ๋ ฅ์ `toString`์ ํฌํจ์ํฌ ์๋ ์๋ค. ๋ค๋ง ๋งค๊ฐ๋ณ์๊ฐ ์๋ ์ธ์คํด์ค ๋ฉ์๋(`non-static`)๋ง ํฌํจ์ํฌ ์ ์๋ค. `@ToString.Include`๋ฅผ ์ฌ์ฉํ๋ฉด ๋๋ค.

```java
// code
@ToString()
class Person{
    private String name;
    @ToString.Include
    public String greet(){
        return "Hello ";
    }
}
// build
class Person {
    private String name;
    public String greet() {
        return "Hello ";
    }
    public String toString() {
        String var10000 = this.name;
        return "Person(name=" + var10000 + ", greet=" + this.greet() + ")";
    }
}
```

๋ํ `@ToString.Include(name = "custom name")`๋ฅผ ์ฌ์ฉํด์ ์ด๋ฆ์ ๋ฐ๊พธ๊ฑฐ๋ `@ToString.Include(rank = -1)`๋ฅผ ์ฌ์ฉํด์ ์ถ๋ ฅ ์์๋ฅผ ๋ฐ๊พธ๋ ๊ฒ๋ ๊ฐ๋ฅํ๋ค. ํ๋์ ๊ธฐ๋ณธ `rank`๋ `0`์ด๋ค. ๋์ ๊ฐ์ ๊ฐ์ง ์๋ก ๋จผ์  ์ถ๋ ฅ๋๋ฉฐ `rank`๊ฐ ๊ฐ์ ๊ฒฝ์ฐ ์์ค ํ์ผ์ ๋ฑ์ฅํ๋ ์์๋๋ก ์ถ๋ ฅ๋๋ค.

```java
// code
@ToString()
class Person{
    @ToString.Include(rank=-1, name="Important Field!!!!!")
    private String other;
    private String school;
    private String name;
    @ToString.Include(rank=2)
    private int age;
}
// build
class Person {
    private String other;
    private String school;
    private String name;
    private int age;

    public String toString() {
        return "Person(age=" + this.age + ", school=" + this.school + ", name=" + this.name + 
        ", Important Field!!!!!=" + this.other + ")";
    }
}
```
๋ง์ฝ ๋งค๊ฐ๋ณ์๋ฅผ ๋ฐ์ง ์๋ `toString` ๋ฉ์๋๊ฐ ์ด๋ฏธ ์กด์ฌํ๋ค๋ฉด ๋ฐํ ํ์์ ๊ด๋ จ์์ด ๋ฉ์๋๋ฅผ ์์ฑํ์ง ์๋๋ค. ๊ทธ๋์  ๊ฒฝ๊ณ ๋ฅผ ๋ฐ์์ํจ๋ค.

๋ฐฐ์ด์ `Arrays.deepToString` ๋ฉ์๋๋ฅผ ์ฌ์ฉํด์ ์ถ๋ ฅ๋๋ค. ๋ฐ๋ผ์ ๋ง์ฝ ๋ฐฐ์ด์ด ์์ ์ ํฌํจํ๋ ๊ฒฝ์ฐ `StackOverFlowError`๋ฅผ ๋ฐ์์ํจ๋ค. `Arrays.deepToString` ๋ฉ์๋๋ ๋ด๋ถ์ ์ผ๋ก ๊ฐ ์์์ `toString()`์ ํธ์ถํ๋ค. ๋ง์ฝ ์๊ธฐ ์์ ์ด ๋ฐฐ์ด์ ์์๋ผ๋ฉด ์๊ธฐ ์์ ์ `toString()`์ ์ฌ๊ท์ ์ผ๋ก ํธ์ถํ๊ฒ ๋๋ฏ๋ก `StackOverFlowError`๊ฐ ๋ฐ์ํ๋ ๊ฒ์ด๋ค.

๋ํ `lombok`๋ ๊ฐ ๋ฒ์  ๋ณ๋ก `toString()` ์ถ๋ ฅ์ด ๊ฐ์์ ๋ณด์ฅํ์ง ์๋๋ค. ๋ฐ๋ผ์ `toString()`๋ฅผ ํ์ฑํ๋ ๋ฑ `API`์ ์์กดํ๋ ์ฝ๋๋ฅผ ์ง์๋ ์๋๋ค.

๋ํ `$`๋ก ์์ํ๋ ๋ณ์๋ ๊ธฐ๋ณธ์ ์ผ๋ก๋ ์ ์ธํ๋ค. ํฌํจํ๋ ค๋ฉด `@ToString.Include`๋ฅผ ๋ช์ํด์ผ๋ง ํ๋ค.

๋ง์ฝ `getter`๊ฐ ์กด์ฌํ๋ ๊ฒฝ์ฐ ํ๋์ ์ง์  ์ ๊ทผํ์ง ์๊ณ  `getter`๋ฅผ ํธ์ถํ๋ค. ๋ง์ฝ ํ๋์ ์ง์  ์ ๊ทผํ๋๋ก ํ๋ ค๋ฉด `@ToString(doNotUseGetters = true)`๋ฅผ ์ฌ์ฉํ๋ค.

### @EqualsAndHashCode

`@EqualsAndHashCode`๋ฅผ ์ฌ์ฉํ๋ฉด `lombok`์ด `equals(Object other)`์ `hashCode()`๋ฅผ ๋ง๋ค์ด์ค๋ค. ๊ธฐ๋ณธ์ ์ผ๋ก ๋ชจ๋  `non-static`, `non-transient` ํ๋๋ฅผ ์ฌ์ฉํ์ง๋ง `@EqualsAndHashCode.Include`์ `@EqualsAndHashCode.Exclude`๋ฅผ ์ฌ์ฉํด์ ๋ช์์ ์ผ๋ก ์ ํํ  ์๋ ์๋ค. `@ToString`์ฒ๋ผ `@EqualsAndHashCode(onlyExplicitlyIncluded = true)`๋ฅผ ์ฌ์ฉํ๋ ๊ฒ๋ ๊ฐ๋ฅํ๋ค.

๋ง์ฝ ๋ค๋ฅธ ํด๋์ค๋ฅผ ์์๋ฐ๋ ํด๋์ค์๊ฒ `@EqualsAndHashCode`๋ฅผ ์ฌ์ฉํ๋ค๋ฉด ๋์ ๋ฐฉ์์ด ํน์ดํ๋ค. ์ผ๋ฐ์ ์ผ๋ก, ๋ค๋ฅธ ํด๋์ค๋ฅผ ์์๋ฐ๋ ํด๋์ค์๊ฒ ์๋์ผ๋ก `equals`์ `hashCode`๋ฅผ ์์ฑํ๊ฒ ํ๋ ๊ฒ์ ์ข์ ๋ฐฉ๋ฒ์ด ์๋๋ค. ์ํผ ํด๋์ค์ ์กด์ฌํ๋ ํ๋ ๋ํ `equals/hashCode`๋ฅผ ํ์๋ก ํ๋๋ฐ `lombok`์ด ์ํผํด๋์ค์ ์ฝ๋๊น์ง ์๋์ผ๋ก ์์ฑํด ์ค ์๋ ์๊ธฐ ๋๋ฌธ์ด๋ค.

`callSuper`๋ฅผ `true`๋ก ์ค์ ํ๋ฉด ์ํผํด๋์ค์ `equals`์ `hashCode`๋ฅผ ์ฌ์ฉํ๋ค. ๋ชจ๋  `equals` ๊ตฌํ์ด ๋ชจ๋  ์ํฉ์ ์ ์ ํ๊ฒ ๋ค๋ฃฐ ์ ์๋ ๊ฒ์ ์๋์ง๋ง `lombok`์ด ๋ง๋  `equals`๋ ๋ชจ๋  ์ํฉ์ ์ ์ ํ๊ฒ ๋ค๋ฃฐ ์ ์๋๋ก ํด์ค๋ค. 

๋ง์ฝ ํด๋์ค๊ฐ ์๋ฌด๋ฐ ํด๋์ค๋ฅผ ์์๋ฐ์ง ์๋๋ฐ `callSuper`๋ฅผ `true`๋ก ์ค์ ํ๋ค๋ฉด ์ปดํ์ผ ์๋ฌ๊ฐ ๋ฐ์ํ๋ค. ๋ํ ํด๋์ค๋ฅผ ์์๋ฐ๋๋ฐ `callSuper`๋ฅผ `true`๋ก ์ค์ ํ์ง ์๋ ๊ฒฝ์ฐ ๊ฒฝ๊ณ ๋ฅผ ๋ฐ์์ํจ๋ค. ์ํด ํด๋์ค์ `equals`์ ์ฌ์ฉํ๋ ํ๋๊ฐ ์๋ค๋ฉด ์๊ด์์ง๋ง ๊ทธ๋ ์ง ์๋ค๋ฉด ์ํผ ํด๋์ค์ ์กด์ฌํ๋ ํ๋๋ฅผ ๋น๊ตํ์ง ๋ชปํ๊ธฐ ๋๋ฌธ์ด๋ค.

> warning: Generating equals/hashCode implementation but without a call to superclass, even though this class does not extend java.lang.Object. If this is intentional, add '@EqualsAndHashCode(callSuper=false)' to your type.  

์ค์ ๋ก ์์ ๊ฐ์ ๊ฒฝ๊ณ ๋ฅผ ๋ฐ์์ํค๋ฉฐ `callSuper`๋ฅผ `false`๋ก ๋ช์์ ์ผ๋ก ์ค์ ํ๋ฉด ๊ฒฝ๊ณ ๋ ์ฌ๋ผ์ง๋ค.

๋ํ `@ToString`๊ณผ ๋ง์ฐฌ๊ฐ์ง๋ก `StackOverFlowError`๋ฅผ ์กฐ์ฌํด์ผ ํ๋ค. ์๊ธฐ ์์ ์ ํฌํจํ๋ ๋ฐฐ์ด์ ๊ฐ์ง๊ฑฐ๋ ์ํ ์ฐธ์กฐ๊ฐ ์กด์ฌํ๋ ๊ฒฝ์ฐ ๋ช์์ ์ผ๋ก ์ด๋ฅผ ์ ์ธํด์ผ๋ง ์ฌ์ฉํ  ์ ์๋ค.

๋ํ `@ToString`์ฒ๋ผ `doNotUseGetters`๋ฅผ ์ฌ์ฉํ  ์ ์์ผ๋ฉฐ $๋ก ์์ํ๋ ๋ณ์๋ ํฌํจํ์ง ์๋๋ค.

`lombok` 1.16.22 ๋ฒ์  ์ด์ ์๋ `of`์ `exclude`๋ฅผ ์ฌ์ฉํด์ `Include / Exclude`๋ฅผ ํ  ์ ์์๊ณ  ์ฌ์ ํ ์ง์๋์ง๋ง `deprecated`๋  ์์ ์ด๋ฏ๋ก ์ฌ์ฉํ์ง ๋ง์.

### @NoArgsConstructor, @RequiredArgsConstructor, @AllArgsConstructor

#### @NoArgsConstructor

๋งค๊ฐ๋ณ์๊ฐ ์๋ ์์ฑ์๋ฅผ ์์ฑํ๋ค. ๋ง์ฝ ๋ถ๊ฐ๋ฅ ํ๋ค๋ฉด(`final` ํ๋ ๋๋ฌธ์) ์ปดํ์ผ ์๋ฌ๊ฐ ๋๋ค. ๋ง์ฝ `@NoArgsConstructor(force = true)`๋ฅผ ์ฌ์ฉํ๋ฉด ์ปดํ์ผ ์๋ฌ๋ฅผ ๋ฐ์์ํค๋ ๋์  ๋ชจ๋  `final` ํ๋๋ ๊ธฐ๋ณธ๊ฐ(0, false, null)๋ก ์ด๊ธฐํ๋๋ค.

#### @RequiredArgsConstructor

์ด๊ธฐํ๋์ง ์์ ๋ชจ๋  `final` ํ๋, `@NonUll` ํ๋์ ๋ํ ์์ฑ์๋ฅผ ์์ฑํด์ค๋ค. `@NonNull` ํ๋์ ๊ฒฝ์ฐ null check ๊ตฌ๋ฌธ ๋ํ ์์ฑํด์ค๋ค. ์์ฑ์ ํ๋ผ๋ฏธํฐ์ ์์๋ ํ๋๊ฐ ์์ฑ๋ ์์์ ๊ฐ๋ค.

#### @AllArgsConstructor

๋ชจ๋  ํ๋์ ๋ํ ์์ฑ์๋ฅผ ๋ง๋ค์ด์ค๋ค. ๋ง์ฐฌ๊ฐ์ง๋ก `@NonNull` ํ๋์ ๋ํ null check ๊ตฌ๋ฌธ์ ์์ฑํด์ค๋ค.

#### staticName

`@RequiredArgsConstructor(staticName = "of")`์ ๊ฐ์ด ์ฌ์ฉํ๋ฉด `MapEntry.of("name", value)`์ฒ๋ผ `static Factory`๋ฅผ ๋ง๋ค์ด์ค๋ค. 

```java
// code
@AllArgsConstructor
@RequiredArgsConstructor(staticName = "from")
class Person{
    final private String name;
    private int age;
    @NonNull private String school;
}
// build
class Person {
    private final String name;
    private int age;
    @NonNull
    private String school;

    public Person(final String name, final int age, @NonNull final String school) {
        if (school == null) {
            throw new NullPointerException("school is marked non-null but is null");
        } else {
            this.name = name;
            this.age = age;
            this.school = school;
        }
    }

    private Person(final String name, @NonNull final String school) {
        if (school == null) {
            throw new NullPointerException("school is marked non-null but is null");
        } else {
            this.name = name;
            this.school = school;
        }
    }

    public static Person from(final String name, @NonNull final String school) {
        return new Person(name, school);
    }
}
```

### @Data

๋ชจ๋  ํ๋์ ๋ํด `@ToString`, `@EqualsAndHashCode`, `@Getter`๋ฅผ, ๋ชจ๋  `non-final` ํ๋์ ๋ํด `@Setter`๋ฅผ ์ค์ ํ๊ณ  `@RequiredArgsConstructor`๋ฅผ ์ค์ ํด์ฃผ๋ ๋จ์ถ `Annotation`์ด๋ค.


### @Value

`@Data`์ ๋ถ๋ณ ํด๋์ค ๋ฒ์ ์ด๋ค. ๋ชจ๋  ํ๋๋ฅผ `private / final`๋ก ๋ง๋ค๊ณ  `setter`๋ ์์ฑ๋์ง ์๋๋ค. ํด๋์ค ๋ํ `final`๋ก ๋ง๋ ๋ค.

`@Data`์ฒ๋ผ `toString(), equals(), hashCode()`๋ฅผ ์๋์ผ๋ก ์์ฑํด์ฃผ๊ณ  ๊ฐ ํ๋์ ๋ํ `getter`์ ์์ฑ์ ๋ํ ๋ง๋ค์ด ์ค๋ค.

์ฆ, `@Value`๋ `final @ToString @EqualsAndHashCode @AllArgsConstructor @FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE) @Getter`์ ๋จ์ถํ์ด๋ค.

### @With

`lombok` 0.11.4 ๋ฒ์ ์์ ์คํ ๊ธฐ๋ฅ์ผ๋ก `@Wither`๊ฐ ์ถ๊ฐ๋์์ผ๋ฉฐ 1.18.10 ๋ฒ์ ์์ ์ ์ ๊ธฐ๋ฅ์ผ๋ก ๋ฐ๋๋ฉด์ `@With`๋ก ์ด๋ฆ์ด ๋ฐ๋์๋ค.

`setter`์ ๋ถ๋ณ ๋ฒ์ ์ด๋ค. ํ๋์ `@With`๋ฅผ ๋ช์ํ ๊ฒฝ์ฐ `withFieldName(newValue)` ํํ๋ก ๋ฉ์๋๋ฅผ ์ถ๊ฐํด์ค๋ค.

`@With`๋ ๊ฐ์ฒด๋ฅผ ์์ฑํ๊ธฐ ์ํด์ ์์ฑ์์ ์์กดํ๋ค. ๋ง์ฝ ์ ์ ํ ์์ฑ์๊ฐ ์กด์ฌํ์ง ์๋๋ค๋ฉด `@With`๋ ์ปดํ์ผ ์ค๋ฅ๋ฅผ ๋ฐ์์ํจ๋ค. 

`@Setter`์ฒ๋ผ `AccessLevel`์ ์ฌ์ฉํด์ ์ ๊ทผ ์์ค์ ์ค์ ํ  ์ ์์ผ๋ฉฐ ๊ธฐ๋ณธ๊ฐ์ `public`์ด๋ค.

```java
// code
@AllArgsConstructor
class Person{
    private String name;
    @With private int age;
}
// build
class Person {
    private String name;
    private int age;

    public Person(final String name, final int age) {
        this.name = name;
        this.age = age;
    }

    public Person withAge(final int age) {
        return this.age == age ? this : new Person(this.name, age);
    }
}
```

### @Builder

๋น๋๋ฅผ ์๋์ผ๋ก ์์ฑํด์ค๋ค. ํด๋์ค์ ์์ฑํ๋ฉด ๋ชจ๋  ํ๋์ ๋ํ ๋น๋๋ฅผ ๋ง๋ค์ด์ค๋ค. ์ํ๋ ํ๋์ ๋ํด์๋ง ๋น๋๋ฅผ ์์ฑํ๊ณ  ์ถ์ ๊ฒฝ์ฐ ์์ฑ์๋ฅผ ์์ฑํ๊ณ  ๊ทธ ์์ `@Builder`๋ฅผ ๋ถ์ฌ์ฃผ๋ฉด ๋๋ค.

```java
// code
@Builder
class Person{
    private String name;
    private int age;
}
// build
class Person {
    private String name;
    private int age;

    Person(final String name, final int age) {
        this.name = name;
        this.age = age;
    }

    public static Person.PersonBuilder builder() {
        return new Person.PersonBuilder();
    }

    public static class PersonBuilder {
        private String name;
        private int age;

        PersonBuilder() {
        }

        public Person.PersonBuilder name(final String name) {
            this.name = name;
            return this;
        }

        public Person.PersonBuilder age(final int age) {
            this.age = age;
            return this;
        }

        public Person build() {
            return new Person(this.name, this.age);
        }

        public String toString() {
            return "Person.PersonBuilder(name=" + this.name + ", age=" + this.age + ")";
        }
    }
}

// ์๋์ฒ๋ผ ์ฌ์ฉ
Person person = Person.builder()
    .name("name")
    .age(1)
    .build();
```

### @CleanUp

์์ ํ๊ฒ `close()`๋ฅผ ํธ์ถํด์ค๋ค.

```java
// code
class Person {
    public static void main(String[] args) throws IOException {
        File file;
        @Cleanup InputStream in = new FileInputStream(args[0]);
        byte[] b = new byte[10000];
        while (in.read(b) != -1) {
            System.out.println("Read~");
        }
    }
}
// build
class Person {
    public static void main(String[] args) throws IOException {
        FileInputStream in = new FileInputStream(args[0]);
        try {
            byte[] b = new byte[10000];

            while(in.read(b) != -1) {
                System.out.println("Read~");
            }
        } finally {
            if (Collections.singletonList(in).get(0) != null) {
                in.close();
            }
        }
    }
}
```

## ๊ฒฐ๋ก 

์์ ๊ฐ์ด `lombok`์ด ์ด๋ ํ ๊ธฐ๋ฅ์ ์ ๊ณตํ๊ณ  ์ค์ ๋ก ์ด๋ ํ ์ฝ๋๋ฅผ ์์ฑํ๋์ง ์ดํด๋ดค๋ค. ๋ ์์ธํ ์ ๋ณด๋ [์ฌ๊ธฐ](https://projectlombok.org/features/all)์์ ํ์ธํ  ์ ์๋ค. `lombok`์ ๋ง์ ๊ฐ๋ฐ์๋ค์ด ์ฌ์ฉํ๊ณ  ์๊ฐ ๋ญ๋น๋ฅผ ์ค์ฌ์ฃผ๋ ์ ๋ง ์์คํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ด์ง๋ง ๊ทธ๋งํผ ์กฐ์ฌํด์ผ ๋  ๋ถ๋ถ๋ ๋ง๋ค. `lombok`์ด ์ด๋ป๊ฒ ์ด๋ฐ ๊ณ ๋ฏผ์ ํด๊ฒฐํ๋์ง ์ดํด๋ณด๊ณ  ์ค์ ๋ก ์ฌ์ฉํด๋ณด๋ฉด ์ข์ ๊ฒ ๊ฐ๋ค.
```toc
```
