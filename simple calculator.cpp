#include <iostream>
using namespace std;
int main()
{

    char op;
    float num1, num2;

    cout << "Enter operator either + or * or - or / :";
    cin >> op;
    cout << "enter two operands :";
    cin >> num1 >> num2;

    switch (op)
    {
    case '+':
        cout << num1 + num2;
        break;

    case '-':
        cout << num1 - num2;
        break;

    case '*':
        cout << num1 * num2;
        break;

    case '/':
        cout << num1 / num2;
        break;

    default:
        // if the operator is other than +, *, / , % so this case-->
        cout << "Enter ! operator is not correct";
        break;
    }
    return 0;
}