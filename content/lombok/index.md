- - - -
emoji: 🌶
title: Lombok이란?
date: '2021-08-28 15:00:00'
author: 쿠키
tags: Java Lombok
categories: Java
- - - -

## Lombok이란?

`Lombok`이란 Java의 라이브러리로 반복되는 메소드를 `Annotation`을 사용해서 자동으로 작성해주는 라이브러리다. 보통 DTO나 Model, Entity의 경우 여러 속성이 존재하고 이들이 가지는 프로퍼티에 대해서 Getter나 Setter, 생성자 등을 매번 작성해줘야 하는 경우가 많은데 이러한 부분을 자동으로 만들어주는 라이브러리라고 할 수 있다.

또한 DTO와 같이 자주 변경되는 클래스의 경우 멤버 변수가 추가되거나 없어질 때마다 Getter, Setter, 생성자 등을 수정해줘야 하는 경우가 발생한다. 이러한 경우에도 `Lombok`을 이용하면 단순히 프로퍼티를 추가하고 삭제하는 것만으로도 충분하다.

`Lombok`을 이용해서 작성한 코드는 컴파일 과정에서 `Annotation`을 이용해서 코드를 생성하고 이런 결과물이 `.class`에 담기게 되는 것이다.

귀찮은 과정을 줄여주고 반복되는 코드 작성을 대신 해준다는 점에서 많은 개발자들이 선호하는 라이브러리이지만 호불호가 갈리는 라이브러리이기도 하므로 팀 프로젝트에 도입하는 경우 주의해야 한다.

또한 단순히 `Annotation`을 이용해서 코드를 작성해주는 라이브러리이므로 각 `API`가 어떤식으로 작동하는지 숙지한 채로 사용하는 것이 좋다. 다른 라이브러리와 충돌이 발생할 수도 있고 내가 원하지 않는 방식으로 작동할 수도 있기 때문이다.

예를 들어 `@Data`나 `@ToString`의 경우 순환 참조 또는 무한 재귀 호출로 인해 `StackOverFlowError`가 발생할 수도 있다. 이는 아래서 자세하게 살펴보겠다.

## Lombok 사용법

### @Getter, @Setter

필드에 대한 `getter`, `setter`를 자동으로 생성해주는 `Annotation`이다. 만약 필드의 이름이 `name`이라면 `getName()`과 `setName()`을 추가해준다.

예를 들면 아래와 같다.

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

위와 같이 `Annotation`이 명시된 필드에 대해 `getX()`, `setX()`를 추가해주는 것을 알 수 있다.

자동으로 생성되는 `getter`와 `setter`의 경우 기본은 `public`이며 `AccessLevel`을 명시한 경우 `PUBLIC`, `PROTECTED`, `PACKAGE`, `PRIVATE` 등으로도 생성할 수 있다.

```java
// Code
class Person{
    @Getter(AccessLevel.PRIVATE)
    @Setter(AccessLevel.PROTECTED)
    private String name;
}
```

또한 `@Getter` ,`@Setter`를 클래스에 명시할 수도 있다. 이 경우 모든 `non-static` 필드에 대해 `getter`와 `setter`를 추가해준다.

```java
@Getter
@Setter
class Person{
    private String name;
    private int age;
}
```

만약 이름이 같고 매개변수의 수가 같은 메소드가 이미 존재한다면 메소드가 생성되지 않는다.

예를 들어 `getName(String... names)`가 이미 존재한다면 `getName()` 메소드는 기술적으로 가능하더라도 생성되지 않는다. 이는 메소드 사용의 혼동을 방지하기 위해서다. 메소드가 생성되지는 않지만 이에 대해 경고 메시지로 알려준다.

또한 열거형 변수에 `@Getter`는 사용할 수 있지만 `@Setter`는 사용할 수 없다.

### @NonNull

메소드나 생성자의 매개변수에 `@NonNull`을 사용하면 `lombok`이 null check를 해준다.

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

`@ToString`이 붙은 클래스는 `lombok`이 `toString()` 메소드를 생성해준다. 기본적으로는 클래스 이름과 각 필드에 대한 값을 `,`으로 구분해서 출력해준다.

```java
// code
@ToString
class Person{
    private String name;
    private int age;
}
// build
// 필요없는 부분은 생략
class Person {
    private String name;
    private int age;
    public String toString() {
        return "Person(name=" + this.name + ", age=" + this.age + ")";
    }
}
```

`includeFieldNames`를 설정하면 각 필드의 이름과 함께 값을 확인할 수 있다. `true`가 기본값이다.

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

기본적으로 모든 `non-static` 필드는 `toString()`에 포함되지만 원한다면 몇몇 필드는 `@ToString.Exclude`를 사용해서 제외할 수 있다. 아니면 `@ToString(onlyExplicitlyIncluded = true)`를 사용해서 명시적으로 `@ToString.Include`가 붙은 필드만 포함시킬 수도 있다.

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

`callSuper`를 설정하면 슈퍼 클래스의 `toString` 반환값을 포함할 수도 있다.

다른 메소드의 출력을 `toString`에 포함시킬 수도 있다. 다만 매개변수가 없는 인스턴스 메소드(`non-static`)만 포함시킬 수 있다. `@ToString.Include`를 사용하면 된다.

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

또한 `@ToString.Include(name = "custom name")`를 사용해서 이름을 바꾸거나 `@ToString.Include(rank = -1)`를 사용해서 출력 순서를 바꾸는 것도 가능하다. 필드의 기본 `rank`는 `0`이다. 높은 값을 가질 수록 먼저 출력되며 `rank`가 같은 경우 소스 파일에 등장하는 순서대로 출력된다.

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
만약 매개변수를 받지 않는 `toString` 메소드가 이미 존재한다면 반환 타입에 관련없이 메소드를 생성하지 않는다. 그대신 경고를 발생시킨다.

배열은 `Arrays.deepToString` 메소드를 사용해서 출력된다. 따라서 만약 배열이 자신을 포함하는 경우 `StackOverFlowError`를 발생시킨다. `Arrays.deepToString` 메소드는 내부적으로 각 요소의 `toString()`을 호출한다. 만약 자기 자신이 배열의 원소라면 자기 자신의 `toString()`을 재귀적으로 호출하게 되므로 `StackOverFlowError`가 발생하는 것이다.

또한 `lombok`는 각 버전 별로 `toString()` 출력이 같음을 보장하지 않는다. 따라서 `toString()`를 파싱하는 등 `API`에 의존하는 코드를 짜서는 안된다.

또한 `$`로 시작하는 변수는 기본적으로는 제외한다. 포함하려면 `@ToString.Include`를 명시해야만 한다.

만약 `getter`가 존재하는 경우 필드에 직접 접근하지 않고 `getter`를 호출한다. 만약 필드에 직접 접근하도록 하려면 `@ToString(doNotUseGetters = true)`를 사용한다.

### @EqualsAndHashCode

`@EqualsAndHashCode`를 사용하면 `lombok`이 `equals(Object other)`와 `hashCode()`를 만들어준다. 기본적으로 모든 `non-static`, `non-transient` 필드를 사용하지만 `@EqualsAndHashCode.Include`와 `@EqualsAndHashCode.Exclude`를 사용해서 명시적으로 선택할 수도 있다. `@ToString`처럼 `@EqualsAndHashCode(onlyExplicitlyIncluded = true)`를 사용하는 것도 가능하다.

만약 다른 클래스를 상속받는 클래스에게 `@EqualsAndHashCode`를 사용한다면 동작 방식이 특이하다. 일반적으로, 다른 클래스를 상속받는 클래스에게 자동으로 `equals`와 `hashCode`를 생성하게 하는 것은 좋은 방법이 아니다. 슈퍼 클래스에 존재하는 필드 또한 `equals/hashCode`를 필요로 하는데 `lombok`이 슈퍼클래스의 코드까지 자동으로 생성해 줄 수는 없기 때문이다.

`callSuper`를 `true`로 설정하면 슈퍼클래스의 `equals`와 `hashCode`를 사용한다. 모든 `equals` 구현이 모든 상황을 적절하게 다룰 수 있는 것은 아니지만 `lombok`이 만든 `equals`는 모든 상황을 적절하게 다룰 수 있도록 해준다. 

만약 클래스가 아무런 클래스를 상속받지 않는데 `callSuper`를 `true`로 설정한다면 컴파일 에러가 발생한다. 또한 클래스를 상속받는데 `callSuper`를 `true`로 설정하지 않는 경우 경고를 발생시킨다. 슈펴 클래스에 `equals`에 사용하는 필드가 없다면 상관없지만 그렇지 않다면 슈퍼 클래스에 존재하는 필드를 비교하지 못하기 때문이다.

> warning: Generating equals/hashCode implementation but without a call to superclass, even though this class does not extend java.lang.Object. If this is intentional, add '@EqualsAndHashCode(callSuper=false)' to your type.  

실제로 위와 같은 경고를 발생시키며 `callSuper`를 `false`로 명시적으로 설정하면 경고는 사라진다.

또한 `@ToString`과 마찬가지로 `StackOverFlowError`를 조심해야 한다. 자기 자신을 포함하는 배열을 가지거나 순환 참조가 존재하는 경우 명시적으로 이를 제외해야만 사용할 수 있다.

또한 `@ToString`처럼 `doNotUseGetters`를 사용할 수 있으며 $로 시작하는 변수는 포함하지 않는다.

`lombok` 1.16.22 버전 이전에는 `of`와 `exclude`를 사용해서 `Include / Exclude`를 할 수 있었고 여전히 지원되지만 `deprecated`될 예정이므로 사용하지 말자.

### @NoArgsConstructor, @RequiredArgsConstructor, @AllArgsConstructor

#### @NoArgsConstructor

매개변수가 없는 생성자를 생성한다. 만약 불가능 하다면(`final` 필드 떄문에) 컴파일 에러가 난다. 만약 `@NoArgsConstructor(force = true)`를 사용하면 컴파일 에러를 발생시키는 대신 모든 `final` 필드는 기본값(0, false, null)로 초기화된다.

#### @RequiredArgsConstructor

초기화되지 않은 모든 `final` 필드, `@NonUll` 필드에 대한 생성자를 생성해준다. `@NonNull` 필드의 경우 null check 구문 또한 생성해준다. 생성자 파라미터의 순서는 필드가 작성된 순서와 같다.

#### @AllArgsConstructor

모든 필드에 대한 생성자를 만들어준다. 마찬가지로 `@NonNull` 필드에 대한 null check 구문을 생성해준다.

#### staticName

`@RequiredArgsConstructor(staticName = "of")`와 같이 사용하면 `MapEntry.of("name", value)`처럼 `static Factory`를 만들어준다. 

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

모든 필드에 대해 `@ToString`, `@EqualsAndHashCode`, `@Getter`를, 모든 `non-final` 필드에 대해 `@Setter`를 설정하고 `@RequiredArgsConstructor`를 설정해주는 단축 `Annotation`이다.


### @Value

`@Data`의 불변 클래스 버전이다. 모든 필드를 `private / final`로 만들고 `setter`는 생성되지 않는다. 클래스 또한 `final`로 만든다.

`@Data`처럼 `toString(), equals(), hashCode()`를 자동으로 생성해주고 각 필드에 대한 `getter`와 생성자 또한 만들어 준다.

즉, `@Value`는 `final @ToString @EqualsAndHashCode @AllArgsConstructor @FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE) @Getter`의 단축형이다.

### @With

`lombok` 0.11.4 버전에서 실험 기능으로 `@Wither`가 추가되었으며 1.18.10 버전에서 정식 기능으로 바뀌면서 `@With`로 이름이 바뀌었다.

`setter`의 불변 버전이다. 필드에 `@With`를 명시한 경우 `withFieldName(newValue)` 형태로 메소드를 추가해준다.

`@With`는 객체를 생성하기 위해서 생성자에 의존한다. 만약 적절한 생성자가 존재하지 않는다면 `@With`는 컴파일 오류를 발생시킨다. 

`@Setter`처럼 `AccessLevel`을 사용해서 접근 수준을 설정할 수 있으며 기본값은 `public`이다.

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

빌더를 자동으로 작성해준다. 클래스에 작성하면 모든 필드에 대한 빌더를 만들어준다. 원하는 필드에 대해서만 빌더를 작성하고 싶은 경우 생성자를 작성하고 그 위에 `@Builder`를 붙여주면 된다.

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

// 아래처럼 사용
Person person = Person.builder()
    .name("name")
    .age(1)
    .build();
```

### @CleanUp

안전하게 `close()`를 호출해준다.

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

## 결론

위와 같이 `lombok`이 어떠한 기능을 제공하고 실제로 어떠한 코드를 생성하는지 살펴봤다. 더 자세한 정보는 [여기](https://projectlombok.org/features/all)에서 확인할 수 있다. `lombok`은 많은 개발자들이 사용하고 시간 낭비를 줄여주는 정말 소중한 라이브러리이지만 그만큼 조심해야 될 부분도 많다. `lombok`이 어떻게 이런 고민을 해결하는지 살펴보고 실제로 사용해보면 좋을 것 같다.
```toc
```
