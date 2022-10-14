class SuperApi {
	int cons = 3;
	private int val = 23;
	static int another_val = 10;

	SuperApi(){
		System.out.println("SuperApi invoked" + another_val );
	}
	SuperApi(int a){
		System.out.println("SuperApi invoked with the value : " + a);
	}

	public void increment() {
		this.another_val++;
	}

	public void doSomething() {
		System.out.println("Another_val : "+ this.another_val);
	}
}

abstract class TestAbstract {
	abstract void test();

}

class TestMultipleInheritance {
	TestMultipleInheritance() {
		System.out.println("Test super class invoked");
	}

	public void doing_(){
		System.out.println("Hola from doing_");
	}
}

class TestAbstractInheritance extends TestAbstract {
	void test() {
		System.out.println("hello from abstract tests");
	}
}

class OuterClass {
	int outer_x = 3;

	class InnerClass {
		void printFunction() {
			System.out.println(outer_x);
		}
	}
}

interface Firstone {
	public void firstmethod();
}

interface Secondone {
	public void secondmethod();
}

class ImplementMultipleInterfaces implements Firstone, Secondone {
	ImplementMultipleInterfaces(){
		System.out.println("Interface implementation");
	}
	public void firstmethod() {
		System.out.println("first method");
	}
	public void secondmethod() {
		System.out.println("second method");
	}
}

// public class Api extends SuperApi, TestMultipleInheritance{ no multiple inheritance here
class Api extends SuperApi {

	public void something() {
		System.out.println("from Something");
	}

	public void doAnotherThing(){
		Api new_api = new Api();

		new_api.something();
		super.doSomething();
		System.out.println(super.cons);
	}

	public static void main(String[] args) {
		ImplementMultipleInterfaces hola = new ImplementMultipleInterfaces();
		OuterClass hehe = new OuterClass();
		OuterClass.InnerClass hehe_inner = hehe.new InnerClass();
		hehe_inner.printFunction();
		Api test = new Api();
		Api test2 = new Api();
		TestAbstractInheritance haha = new TestAbstractInheritance();

		haha.test();
		SuperApi testtest = new SuperApi(23);

		test.doSomething();
		test.increment();
		test2.doSomething();

		test.doAnotherThing();
	}
}