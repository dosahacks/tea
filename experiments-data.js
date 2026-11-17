// ==========================================================================
// OOPs Practical Centre — Java Lab Experiments Data
// Extracted directly from OOPs Lab Manual
// ==========================================================================

const EXPERIMENTS = [
  {
    id: 1,
    slug: "exp-1",
    number: "Experiment 01",
    shortNumber: "01",
    category: "Core & Methods",
    categoryKey: "core",
    title: "Programs on Operators, Arithmetic Promotion, and Method Calling",
    aim: "Programs on Operators, Arithmetic Promotion, and Method Calling.",
    objective: "1. To understand the concept of Variables, Constants, and Datatypes.\n2. Understand Operators, Expressions, Arithmetic Promotion, and decision-making with control structures.\n3. To Understand the concept of method calling and parameter passing.",
    theory: "James Gosling created Java at Sun Microsystems with the philosophy 'Write Once, Run Anywhere'. Java execution undergoes 5 phases: Edit, Compile (javac to bytecodes), Load (JVM Class Loader), Verify (Bytecode Verifier), and Execute (JVM & JIT compiler). Java supports primitive data types, final symbolic constants, arithmetic promotion rules (narrow types promoted to int/wider type), and method invocation (both static and non-static) with parameter passing.",
    mainClass: "ArithmeticOperator, Driver",
    fileName: "ArithmeticOperator.java & Driver.java",
    sampleOutput: `--- Program 1: ArithmeticOperator Output ---
The sum of 10 and 20 is: 30
The subtraction of 50 and 45 is: 5
The multiplication of 10 and 5 is: 50
The sum of 80.0 and 8.0 is: 10.0
The sum of 7.0 and 28.0 is: 7.0

--- Program 2: Driver (Method Calling) Output ---
Hi, I am Mary!
Hi, I am Lucy!
Hi, I am Alex!
Hi, I am Zoey!`,
    code: `// Experiment 1: Programs on Operators, Arithmetic Promotion, and Method Calling

// Program 1: Operators and Arithmetic Promotion
class ArithmeticOperator 
{ 
    public static void add(long a, int b) 
    { 
        long result = a + b; 
        System.out.println("The sum of " + a + " and " + b + " is: " + result); 
    } 

    public static void sub(long a, long b) 
    { 
        long result = a - b; 
        System.out.println("The subtraction of " + a + " and " + b + " is: " + result); 
    } 

    public static void multi(long a, int b) 
    { 
        long result = a * b; 
        System.out.println("The multiplication of " + a + " and " + b + " is: " + result); 
    } 

    public double div(double a, double b) 
    { 
        double result = a / b; 
        System.out.println("The sum of " + a + " and " + b + " is: " + result); 
        return result; 
    } 

    public double modulus(double a, double b) 
    { 
        double result = a % b; 
        System.out.println("The sum of " + a + " and " + b + " is: " + result); 
        return result; 
    } 

    public static void main(String[] args) 
    { 
        add(10, 20); 
        sub(50, 45); 
        multi(10, 5); 

        ArithmeticOperator a = new ArithmeticOperator(); 
        a.div(80, 8); 
        a.modulus(7, 28); 
    } 
}

// Program 2: Method Calling (Passing Parameters to Method)
class Driver 
{ 
    public static void printName(String name) 
    { 
        System.out.println("Hi, I am " + name + "!"); 
    } 

    public static void main(String[] args) 
    { 
        String name = "Mary"; 
        printName(name); 
        String name1 = "Lucy"; 
        printName(name1); 
        String name2 = "Alex"; 
        printName(name2); 
        String name3 = "Zoey"; 
        printName(name3); 
    } 
}`
  },
  {
    id: 2,
    slug: "exp-2",
    number: "Experiment 02",
    shortNumber: "02",
    category: "Strings & Math",
    categoryKey: "strings",
    title: "Programs on classes String and Math",
    aim: "Programs on classes String and Math.",
    objective: "1. To understand the concept of String class and its inbuilt methods for string manipulation.\n2. To Understand the concept of Math class and its inbuilt methods to perform mathematical operations.",
    theory: "In Java, String is an immutable object representing char sequences. Strings can be created as literals (in String Constant Pool) or via 'new' (in normal heap). Methods include equals(), equalsIgnoreCase(), concat(), length(), and substring(). java.lang.Math provides static mathematical methods such as max(), min(), sqrt(), cbrt(), pow(), log(), and log10().",
    mainClass: "StringMathDemo",
    fileName: "StringMathDemo.java",
    sampleOutput: `--- StringProgram Output ---
true
true
false
true
false
false
HelloJavaProgram
HelloJavaProgramReader
The string length is:11
vaprogram
va

--- mathprogram Output ---
maximum number is : 28.0 
minimum number is : 4.0 
square root of y is : 2.0 
cube root of z is : 5.0 
power of x & y is : 614656.0 
logarithm of x is : 3.332204510175204 
logarithm of y is : 1.3862943611198906 
logarithm of x with base 10 is : 1.4471580313422192`,
    code: `// Experiment 2: Programs on classes String and Math

// Program 1: String Methods
class StringProgram 
{ 
    public static void main(String[] args) 
    { 
        String s1 = "javaprogram", s2 = "javaprogram", s3 = "JAVAPROGRAM", s4 = "python"; 
        String str1 = "Hello", str2 = "JavaProgram", str3 = "Reader"; 

        System.out.println(s1.equalsIgnoreCase(s2)); 
        System.out.println(s1.equalsIgnoreCase(s3)); 
        System.out.println(s1.equalsIgnoreCase(s4)); 
        System.out.println(s1.equals(s2)); 
        System.out.println(s1.equals(s3)); 
        System.out.println(s1.equals(s4)); 
        System.out.println(str1.concat(str2)); 
        System.out.println(str1.concat(str2).concat(str3)); 
        System.out.println("The string length is:" + s1.length()); 
        System.out.println(s1.substring(2)); 
        System.out.println(s1.substring(2, 4)); 
    } 
} 

// Program 2: Math Class Operations
class mathprogram 
{ 
    public static void main(String args[]) 
    { 
        double x = 28, y = 4, z = 125; 

        System.out.println("maximum number is : " + Math.max(x, y)); 
        System.out.println("minimum number is : " + Math.min(x, y)); 
        System.out.println("square root of y is : " + Math.sqrt(y)); 
        System.out.println("cube root of z is : " + Math.cbrt(z)); 
        System.out.println("power of x & y is : " + Math.pow(x, y)); 
        System.out.println("logarithm of x is : " + Math.log(x)); 
        System.out.println("logarithm of y is : " + Math.log(y)); 
        System.out.println("logarithm of x with base 10 is : " + Math.log10(x)); 
        System.out.println("logarithm of y with base 10 is : " + Math.log10(y)); 
    } 
}`
  },
  {
    id: 3,
    slug: "exp-3",
    number: "Experiment 03",
    shortNumber: "03",
    category: "OOP Concepts",
    categoryKey: "oop",
    title: "Function Overloading and Constructors",
    aim: "Write a program to demonstrate Function overloading, Constructors of all types, and default parameters/parameter passing.",
    objective: "1. To understand the concept of method overloading.\n2. To Understand the concept of constructors (parameterized and non-parameterized) and their overloading.\n3. To Understand the concept of parameter passing to the method.",
    theory: "An Object is a runtime entity having state, behaviour, and identity. A Class is a logical template. A Constructor initializes objects at instantiation and has no return type. Constructors can be non-parameterized (default) or parameterized. Method Overloading enables methods in the same class to share the same name with different signatures (parameter types or counts).",
    mainClass: "areaConstructor",
    fileName: "areaConstructor.java",
    sampleOutput: `--- Program 1: Method Overloading Output ---
The area of Circle:63.585
Area of square 49
Area of rectangle 12

--- Program 2: Constructor Overloading Output ---
Area of Rectangle non-parameterized constructor 180
Area of square 16
Area of Rectangle using parameterized constructor120`,
    code: `// Experiment 3: Function Overloading and Constructors

// Program 1: Method Overloading (Calculating Areas)
class areaMethodOverloading 
{ 
    public void area(double r) 
    { 
        double result = 3.14 * r * r; 
        System.out.println("The area of Circle:" + result); 
    } 

    public void area(long s) 
    { 
        long result = s * s; 
        System.out.println("Area of square " + result); 
    } 

    public void area(int l, int b) 
    { 
        int result = l * b; 
        System.out.println("Area of rectangle" + result); 
    } 

    public static void main(String[] args) 
    { 
        areaMethodOverloading a = new areaMethodOverloading(); 
        a.area(4.5); 
        a.area(7); 
        a.area(3, 4); 
    } 
} 

// Program 2: Constructor Overloading (Default & Parameterized)
class areaConstructor 
{ 
    int a; 
    int b; 

    // Non-parameterized constructor
    areaConstructor() 
    { 
        a = 12; 
        b = 15; 
        int r = a * b; 
        System.out.println("Area of Rectangle non-parameterized constructor " + r); 
    } 

    // Parameterized constructor (Square)
    public areaConstructor(int a) 
    { 
        this.a = a; 
        int r1 = a * a; 
        System.out.println("Area of square " + r1); 
    } 

    // Parameterized constructor (Rectangle)
    areaConstructor(int a, int b) 
    { 
        this.a = a; 
        this.b = b; 
        int r = a * b; 
        System.out.println("Area of Rectangle using parameterized constructor" + r); 
    } 

    public static void main(String[] args) 
    { 
        areaConstructor a1 = new areaConstructor(); 
        areaConstructor a2 = new areaConstructor(4); 
        areaConstructor a3 = new areaConstructor(12, 10); 
    } 
}`
  },
  {
    id: 4,
    slug: "exp-4",
    number: "Experiment 04",
    shortNumber: "04",
    category: "Core & Arrays",
    categoryKey: "core",
    title: "Programs on Dealing with Arrays",
    aim: "Programs on dealing with Arrays.",
    objective: "1. To understand the concept of Array, declaration, user input via Scanner, traversal, and reversal in Java.",
    theory: "An array is an indexed collection of similar elements stored in contiguous memory. Java arrays are heap-allocated objects with fixed size at runtime. Indexes range from 0 to size-1. Arrays provide random access and code optimization for sorting and traversal.",
    mainClass: "ArrayProgram",
    fileName: "ArrayProgram.java",
    sampleOutput: `Enter the size of array:
5
Enter the elements of an array
10
20
30
40
50
The elements in an array is:
10 20 30 40 50 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The reverse of an array is:
50
40
30
20
10`,
    code: `// Experiment 4: Programs on dealing with Arrays
import java.util.Scanner; 

public class ArrayProgram 
{ 
    public static void main(String[] args) 
    { 
        int i, size; 
        Scanner sc = new Scanner(System.in); 

        System.out.println("Enter the size of array:"); 
        size = sc.nextInt(); 

        int a[] = new int[size]; 

        System.out.println("Enter the elements of an array"); 
        for (i = 0; i < size; i++) 
        { 
            a[i] = sc.nextInt(); 
        } 

        System.out.println("The elements in an array is:"); 
        for (i = 0; i < size; i++) 
        { 
            System.out.print(a[i] + " "); 
        } 

        System.out.println("\\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~"); 
        System.out.println("The reverse of an array is:"); 
        for (i = size - 1; i >= 0; i--) 
        { 
            System.out.println(a[i]); 
        } 
    } 
}`
  },
  {
    id: 5,
    slug: "exp-5",
    number: "Experiment 05",
    shortNumber: "05",
    category: "Strings & Math",
    categoryKey: "strings",
    title: "Advanced String and Math Class Methods",
    aim: "Programs on classes String and Math.",
    objective: "1. To understand the concept of String class and its inbuilt methods for string manipulation (charAt, replace, toUpperCase, toLowerCase, trim).\n2. To Understand the concept of Math class and its inbuilt methods to perform mathematical & trigonometric operations.",
    theory: "Advanced string methods include charAt(index) for character extraction, substring(begin, end) for slicing, replace(oldChar, newChar), toUpperCase(), toLowerCase(), and trim(). Math class methods include round(), signum(), trigonometric functions (sin, cos, tan), hyperbolic functions (sinh, cosh, tanh), and angle conversions (toDegrees, toRadians).",
    mainClass: "StringProgram",
    fileName: "StringMathAdvanced.java",
    sampleOutput: `--- String Program Output ---
h 
12 
NVIBHO 
HELLO 
false 
TANU 
tanvibhosale 
HELLO

--- Math Program Output ---
 x = 29.0
 y = 33.0
 z = 10.3
round of z=10
sign of x= 1.0
trigonometric sine of y= 0.9999118601072672
trigonometric cosine of y =-0.013276747223059479
trigonometric tangent of y =-75.31301480008509
trigonometric hyperbolic sine of x =1.965667148572021E12
trigonometric hyperbolic cosine of x =1.965667148572021E12
trigonometric hyperbolic tangent of x =1.0
z in degree =590.146528984748
z in radian =0.17976891295541594`,
    code: `// Experiment 5: String and Math Class Methods

// Program 1: String Manipulation Methods
class StringProgram 
{ 
    public static void main(String[] args) 
    { 
        String s1 = "tanvibhosale", s2 = "TanviBhosale", s3 = "tanu", s4 = "TANVIBHOSALE"; 
        String str1 = "hello", str2 = " HELLO "; 

        System.out.println(s1.charAt(6)); 
        System.out.println(s2.length()); 
        System.out.println(s4.substring(2, 8)); 
        System.out.println(str2.replace('e', 't')); 
        System.out.println(s1.contains(s2)); 
        System.out.println(s3.toUpperCase()); 
        System.out.println(s4.toLowerCase()); 
        System.out.println(str2.trim()); 
    } 
} 

// Program 2: Math Class Trigonometric & Radians Methods
class mathprogram 
{ 
    public static void main(String args[]) 
    { 
        double x = 29, y = 33, z = 10.3; 

        System.out.println(" x = " + x + "\\n y = " + y + "\\n z = " + z); 
        System.out.println("round of z=" + Math.round(z)); 
        System.out.println("sign of x= " + Math.signum(x)); 
        System.out.println("trigonometric sine of y= " + Math.sin(y)); 
        System.out.println("trigonometric cosine of y =" + Math.cos(y)); 
        System.out.println("trigonometric tangent of y =" + Math.tan(y)); 
        System.out.println("trigonometric hyperbolic sine of x =" + Math.sinh(x)); 
        System.out.println("trigonometric hyperbolic cosine of x =" + Math.cosh(x)); 
        System.out.println("trigonometric hyperbolic tangent of x =" + Math.tanh(x)); 
        System.out.println("z in degree =" + Math.toDegrees(z)); 
        System.out.println("z in radian =" + Math.toRadians(z)); 
    } 
}`
  },
  {
    id: 6,
    slug: "exp-6",
    number: "Experiment 06",
    shortNumber: "06",
    category: "OOP Concepts",
    categoryKey: "oop",
    title: "Inheritance and Method Overriding Polymorphism",
    aim: "Programs on Inheritance and Polymorphism.",
    objective: "1. To understand the concept of Inheritance and its types (Single, Multilevel, Hierarchical).\n2. To Understand the Concept of Polymorphism (Method Overriding / Runtime Dynamic Dispatch).",
    theory: "Inheritance allows subclasses to acquire members of superclasses using 'extends', fostering code reusability. Polymorphism ('many forms') in Java is implemented at compile-time (method overloading) and runtime (method overriding). In runtime polymorphism (Dynamic Method Dispatch), a superclass reference calls the overridden method of the object it refers to.",
    mainClass: "Inheritance",
    fileName: "Inheritance.java",
    sampleOutput: `--- Part 1: Inheritance Hierarchy Output ---
parent class One
child class Two inherited from class One displaying single level inheritance
child class Three inherited from class Two and class One displaying multi level inheritance

--- Part 2: Method Overriding (Bank Interest) Output ---
SBI Rate of Interest: 210
ICICI Rate of Interest: 300
AXIS Rate of Interest: 150`,
    code: `// Experiment 6: Inheritance and Polymorphism

// Part 1: Single-Level and Multi-Level Inheritance
class One 
{ 
    String one_str = "class One"; 

    void displayOne() 
    { 
        System.out.println("parent " + one_str); 
    } 
} 

class Two extends One 
{ 
    String two_str = "class Two"; 

    void displayTwo() 
    { 
        super.displayOne(); 
        System.out.printf("child %s inherited from %s displaying single level inheritance\\n", two_str, one_str); 
    } 
} 

class Three extends Two 
{ 
    String three_str = "class Three"; 

    void displayThree() 
    { 
        super.displayTwo(); 
        System.out.printf("child %s inherited from %s and %s displaying multi level inheritance \\n", three_str, two_str, one_str); 
    } 
} 

class InheritanceDemo 
{ 
    public static void main(String[] args) 
    { 
        Three threeobj = new Three(); 
        threeobj.displayThree(); 
    } 
} 

// Part 2: Method Overriding (Bank Rate of Interest)
class Bank 
{ 
    int getRateOfInterest(int p, int t) 
    { 
        int r = 4; 
        int s = (p * r * t) / 100; 
        return s; 
    } 
} 

class SBI extends Bank 
{ 
    int getRateOfInterest(int p, int t) 
    { 
        int r = 7; 
        int s = (p * r * t) / 100; 
        return s; 
    } 
} 

class ICICI extends Bank 
{ 
    int getRateOfInterest(int p, int t) 
    { 
        int r = 6; 
        int s = (p * r * t) / 100; 
        return s; 
    } 
} 

class AXIS extends Bank 
{ 
    int getRateOfInterest(int p, int t) 
    { 
        int r = 5; 
        int s = (p * r * t) / 100; 
        return s; 
    } 
} 

public class Inheritance 
{ 
    public static void main(String[] args) 
    { 
        SBI s = new SBI(); 
        ICICI i = new ICICI(); 
        AXIS a = new AXIS(); 

        System.out.println("SBI Rate of Interest: " + s.getRateOfInterest(1000, 3)); 
        System.out.println("ICICI Rate of Interest: " + i.getRateOfInterest(1000, 5)); 
        System.out.println("AXIS Rate of Interest: " + a.getRateOfInterest(1000, 3)); 
    } 
}`
  },
  {
    id: 7,
    slug: "exp-7",
    number: "Experiment 07",
    shortNumber: "07",
    category: "OOP Concepts",
    categoryKey: "oop",
    title: "Static and Abstract Modifiers",
    aim: "Programs on static and abstract modifiers.",
    objective: "1. To understand the concept of abstract classes.\n2. To understand the concept of abstract methods.\n3. To understand the use of static keyword.",
    theory: "An abstract class declared with the 'abstract' keyword cannot be directly instantiated and can contain both abstract methods (without body) and concrete methods. Subclasses must override all abstract methods. The 'static' modifier creates class-level members; static variables exist once per class in memory, static methods can be called without instantiating objects, and static blocks execute once during classloading.",
    mainClass: "Test",
    fileName: "ShapeAbstractDemo.java",
    sampleOutput: `Area of Reactangle 24 
Area of Triangle 18.0 
Area of Ellipse 866.64 
Area of Circle 28.26 

--- Static Block & Variable Output ---
In Static block 
0 
20`,
    code: `// Experiment 7: Static and Abstract Modifiers

// Program 1: Abstract Class Shape and Subclasses
abstract class Shape 
{ 
    int dim1, dim2; 

    Shape(int dim1, int dim2) 
    { 
        this.dim1 = dim1; 
        this.dim2 = dim2; 
    } 

    abstract void area(); 
} 

class Rect extends Shape 
{ 
    Rect(int d1, int d2) 
    { 
        super(d1, d2); 
    } 

    void area() 
    { 
        int r = dim1 * dim2; 
        System.out.println("Area of Reactangle " + r); 
    } 
} 

class Triangle extends Shape 
{ 
    Triangle(int d1, int d2) 
    { 
        super(d1, d2); 
    } 

    void area() 
    { 
        double r = 0.5 * dim1 * dim2; 
        System.out.println("Area of Triangle " + r); 
    } 
} 

class Circle extends Shape 
{ 
    Circle(int d1, int d2) 
    { 
        super(d1, d2); 
    } 

    void area() 
    { 
        double r = dim1 * dim1 * 3.14; 
        System.out.println("Area of Circle " + r); 
    } 
} 

class Ellipse extends Shape 
{ 
    Ellipse(int d1, int d2) 
    { 
        super(d1, d2); 
    } 

    void area() 
    { 
        double r = 3.14 * dim1 * dim2; 
        System.out.println("Area of Ellipse " + r); 
    } 
} 

class Test 
{ 
    public static void main(String[] args) 
    { 
        Rect r = new Rect(12, 2); 
        r.area(); 

        Shape s = new Triangle(12, 3); 
        s.area(); 

        Ellipse e = new Ellipse(12, 23); 
        e.area(); 

        Circle c = new Circle(3, 0); 
        c.area(); 
    } 
} 

// Program 2: Static Modifier (Variable & Initializer Block)
class StaticProgram 
{ 
    static int a; 

    static 
    { 
        System.out.println("In Static block"); 
    } 

    public static void main(String args[]) 
    { 
        System.out.println(a); 
        a = 20; 
        System.out.println(a); 
    } 
}`
  },
  {
    id: 8,
    slug: "exp-8",
    number: "Experiment 08",
    shortNumber: "08",
    category: "OOP Concepts",
    categoryKey: "oop",
    title: "Interfaces and Final Modifier",
    aim: "Programs on Interfaces, block initializers, final Modifier, as well as static and dynamic binding.",
    objective: "1. To understand the concept of interface and its implementation in Java.\n2. To understand the concept of static and dynamic binding in Java.\n3. To understand the concept of method hiding in Java.\n4. To understand the concept of final keyword in Java.",
    theory: "An Interface in Java achieves 100% abstraction. All methods are implicitly public and abstract, and all variables are public static final constants. Classes implement interfaces using 'implements', supporting multiple inheritance of type. The 'final' keyword restricts re-assignment: final variables are immutable constants, final methods cannot be overridden, and final classes cannot be inherited.",
    mainClass: "InterfaceProgram",
    fileName: "InterfaceProgram.java",
    sampleOutput: `--- Program 1: Final Keyword Output ---
The value of finalVariable is: 10

--- Program 2: Interface Implementation Output ---
Area of rectangle 30 
Area of ellipse 94.2`,
    code: `// Experiment 8: Interfaces and Final Modifier

// Program 1: Final Class, Final Variable, and Final Method
final class FinalClass 
{ 
    final int finalVariable; 

    FinalClass(int value) 
    { 
        this.finalVariable = value; 
    } 

    final void display() 
    { 
        System.out.println("The value of finalVariable is: " + finalVariable); 
    } 
} 

class FinalProgram 
{ 
    public static void main(String[] args) 
    { 
        FinalClass obj = new FinalClass(10); 
        obj.display(); 
    } 
} 

// Program 2: Interface Implementation (Shape Area)
interface a 
{ 
    void area(int l, int b); 
} 

class rect implements a 
{ 
    public void area(int l, int b) 
    { 
        int r = l * b; 
        System.out.println("Area of rectangle " + r); 
    } 
} 

class ellipse implements a 
{ 
    public void area(int l, int b) 
    { 
        double r = (3.14 * l * b); 
        System.out.println("Area of ellipse " + r); 
    } 
} 

public class InterfaceProgram 
{ 
    public static void main(String[] args) 
    { 
        rect b1 = new rect(); 
        b1.area(5, 6); 

        a b11 = new ellipse(); 
        b11.area(5, 6); 
    } 
}`
  },
  {
    id: 9,
    slug: "exp-9",
    number: "Experiment 09",
    shortNumber: "09",
    category: "Exceptions & Packages",
    categoryKey: "exceptions",
    title: "Exception Handling in Java",
    aim: "Programs on Exception Handling.",
    objective: "1. To understand the concept of Exception handling in Java.\n2. Handle runtime ArithmeticException and InputMismatchException.",
    theory: "Exception handling maintains the normal flow of application when unexpected runtime events occur. Java distinguishes Errors (severe system crashes) from Exceptions (recoverable conditions). Exceptions are divided into Checked (compile-time checked) and Unchecked (runtime exceptions such as ArithmeticException and InputMismatchException). Five keywords govern exception handling: try, catch, finally, throw, and throws.",
    mainClass: "ExceptionHandling",
    fileName: "ExceptionHandling.java",
    sampleOutput: `Enter a number: 0
Error: Division by zero is not allowed.
Scanner closed.
Program continues after exception handling.`,
    code: `// Experiment 9: Exception Handling
import java.util.*; 

public class ExceptionHandling 
{ 
    public static void main(String[] args) 
    { 
        Scanner scanner = new Scanner(System.in); 
        try 
        { 
            System.out.print("Enter a number: "); 
            int number = scanner.nextInt(); 
            int result = 100 / number; 
            System.out.println("Result: " + result); 
        } 
        catch (ArithmeticException e) 
        { 
            System.out.println("Error: Division by zero is not allowed."); 
        } 
        catch (InputMismatchException e) 
        { 
            System.out.println("Error: Please enter a valid integer."); 
        } 
        finally 
        { 
            System.out.println("Scanner closed."); 
        } 
        System.out.println("Program continues after exception handling."); 
    } 
}`
  },
  {
    id: 10,
    slug: "exp-10",
    number: "Experiment 10",
    shortNumber: "10",
    category: "Exceptions & Packages",
    categoryKey: "exceptions",
    title: "Simple Package Creation and Access",
    aim: "Write a Java program that illustrates the creation of simple package, accessing a package, and implementing interfaces.",
    objective: "1. To understand the concept of package.\n2. To understand the use of package.",
    theory: "A Java package is a container that groups related classes, interfaces, and subpackages. Packages prevent namespace collisions, supply access protection (default/package-private and protected levels), and ease code organization. The 'package' statement must be the first line of the source file. Compiling with 'javac -d . Welcome.java' automatically creates the package directory, and the class is executed with its fully qualified name: 'java FirstPackage.Welcome'.",
    mainClass: "Welcome",
    fileName: "Welcome.java",
    sampleOutput: `Procedure to compile and run program:
1. Compile with directory creation command:
   javac -d . Welcome.java
   (This command will create a new folder called FirstPackage)

2. Run with fully qualified class name:
   java FirstPackage.Welcome

Output:
This Is The First Program`,
    code: `// Experiment 10: Simple Package Creation and Access
package FirstPackage; 

// Class in which the above created package belongs to 
public class Welcome 
{ 
    public static void main(String[] args) 
    { 
        System.out.println("This Is The First Program"); 
    } 
}`
  }
];
