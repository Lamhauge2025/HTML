public class Employee extends person {
    public String placeOfWork;

    public Employee(int age, String name, String placeOfWork) {
        super(age, name);

        this.placeOfWork = placeOfWork;
    }

    public void eat() {
        System.out.println("yamyam");
    }

}
