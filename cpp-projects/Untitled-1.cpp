#include <iostream>
using namespace std;
int main()
{
    int valeur1, valeur2;
    cout <<"Veuillez entrer une premiere valeur:";
    cin >> valeur1;
    cout <<"veuillez entrer une deuxieme valeur";
    cin >> valeur2;
    if(valeur2==0)
        cout <<"Il est impossible de diviser un nombre par 0";
    else{
        int division = valeur1/valeur2;
        cout << "la division de vos nombres est egal a: " << division;
    }
    return 0;
}
