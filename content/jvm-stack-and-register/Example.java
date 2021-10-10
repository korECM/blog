public class Example{
    int lastId;

    public void resetId() {
        lastId = 0;
    }

    public int getNextId() {
        return ++lastId;
    }
}
