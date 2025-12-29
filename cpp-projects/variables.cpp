#include <iostream>
#include <string>

int main() {
    // Different variable types
    int age = 25;
    double price = 19.99;
    char grade = 'A';
    bool isPassing = true;
    std::string name = "Alice";

    // Output variables
    std::cout << "Name: " << name << std::endl;
    std::cout << "Age: " << age << std::endl;
    std::cout << "Price: $" << price << std::endl;
    std::cout << "Grade: " << grade << std::endl;
    std::cout << "Passing: " << (isPassing ? "Yes" : "No") << std::endl;

    return 0;
}
