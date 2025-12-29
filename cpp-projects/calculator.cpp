#include <iostream>

int main() {
    double num1, num2;
    char operation;

    std::cout << "Simple Calculator" << std::endl;
    std::cout << "=================" << std::endl;
    
    std::cout << "Enter first number: ";
    std::cin >> num1;
    
    std::cout << "Enter operator (+, -, *, /): ";
    std::cin >> operation;
    
    std::cout << "Enter second number: ";
    std::cin >> num2;

    std::cout << "\nResult: ";
    
    switch(operation) {
        case '+':
            std::cout << num1 + num2 << std::endl;
            break;
        case '-':
            std::cout << num1 - num2 << std::endl;
            break;
        case '*':
            std::cout << num1 * num2 << std::endl;
            break;
        case '/':
            if(num2 != 0) {
                std::cout << num1 / num2 << std::endl;
            } else {
                std::cout << "Error: Division by zero!" << std::endl;
            }
            break;
        default:
            std::cout << "Error: Invalid operator!" << std::endl;
    }

    return 0;
}
