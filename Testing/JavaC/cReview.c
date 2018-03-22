#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void main()
{
 int age;
 char* name;
	
	printf("enter your name\n");
	scanf("%s",name);	//taking input from user
	printf("enter your age\n");
	scanf("%d",&age);

	printf("Hello  %s, you are %d \n",name,age);

	if (age<18)
	{

		printf("you are not allowed in unless you can solve this \n");
	
		srand(time(NULL)); 
		float a = rand()%100;
		float b = rand()%100;
		float input;	

		printf("(%f+%f)/% f\n",a,b,a);
	
		scanf("%f",input);
		
		//float ans = (a+b)/a;

		if(input ==input)
		{
		printf("ok fine here : ****");	
		}
	
		else
		{	
		printf("http://cs.mcgill.ca/~dgilbe9/images/goodbye.jpg");
		}
	}
}







