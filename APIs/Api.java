import java.util.HashMap;
import java.util.HashSet;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Collections;
import java.util.Iterator;

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

		ArrayList<String> arr = new ArrayList<String>();
		ArrayList<Integer> arrInt = new ArrayList<Integer>();
		ArrayList<Double> arrDouble = new ArrayList<Double>();
		ArrayList<Boolean> arrBool = new ArrayList<Boolean>();
		LinkedList<String> listString = new LinkedList<String>();
		HashMap<Integer, String> hashMap = new HashMap<Integer, String>();
		HashSet<Integer> hashSet = new HashSet<Integer>();


		hashSet.add(23);
		hashSet.add(2);
		hashSet.add(4);
		hashSet.add(44);
		hashSet.add(3);
		Iterator<Integer> it = hashSet.iterator();
		// it.remove() for deleting an item the array:
		System.out.println("{ "+it.hasNext()+" }+++++++++++++++++++++++++");
		while(it.hasNext())
		{
			Integer i = it.next();

			if (i == 2)
				it.remove();
			System.out.println(i);

		}
		System.out.println("++++++++++++++"+ hashSet +"+++++++++++");
		// hashSet.add(55);

		System.out.println("Iterator: ========> " + it.hasNext());



		hashMap.put(1, "something");
		hashMap.put(2, "another thing ");
		hashMap.put(3, "something else");


		// use the keySet() for the keys of the hashmap
		// use the values() for the values of the hashmap
		// remove values using a key : hashMap.remove()
		// get the size of the hashmap:  hashMap.size()
		// clear the hashMap : hashMap.clear()
		// 

		System.out.println("hashSet items : ===> " + hashSet);

		System.out.println(hashSet.contains(2));

		System.out.println("values : =>>>>>> " + hashMap.values());
		System.out.println("keys   : =>>>>>> " + hashMap.keySet());

		listString.addFirst("hello");
		listString.add("middle");
		listString.addLast("hi again");

		System.out.println(listString);

		arr.add("First item");
		arr.add("Second item");
		arr.add("Third item");

		Collections.sort(arr);

		test.doSomething();
		test.increment();
		test2.doSomething();

		test.doAnotherThing();
		System.out.println("------------------------");
		arr.remove(1);
		// arr[0] = "First item modified"; // this is not for arraylist so yeah .....
		System.out.println(arr + arr.get(1) + " -- " + arr.size());
		arr.set(0, "First item again");

		System.out.println(arr);
		System.out.println(hashMap);

		for(String item: arr)
			System.out.println(item);





		// Wrapper  Classes : 

		Integer myInt = 4;
		Double myDouble = 3.33;
		Character myChar = 'A';

		System.out.println(myInt.toString().length());
		System.out.println(myDouble.toString().length());
		System.out.println(myChar.toString().length());

		int[] testException = {1,2,3,4};
		try {
			System.out.println(testException[23]);
		}catch(Exception exc)
		{
			System.out.println("Something wrong happened !!!");
		} finally {
			System.out.println("This will execute no matter what ");
		}


	}
}`