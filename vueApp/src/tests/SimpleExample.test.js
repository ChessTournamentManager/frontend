const user = {
    name: "Judah",
    age: 19,
}

test("Judah is 19", () => {
    expect(user.name).toBe("Judah");
    expect(user.age).toBe(19);
});

