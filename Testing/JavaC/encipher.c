#include <stdio.h>
#include <stdlib.h>

void main ()
{
FILE *readP;
FILE *writeP;
char readName[30];
char ch;

printf("Enter the filename to be opened \n");
 scanf("%s", readName);
readP = fopen(readName, "r");

if (readP == NULL) { printf("Cannot open file \n"); exit(0); }

ch = fgetc(readP);

	while(ch != EOF)
	{	
	printf("%c",ch);
	ch = fgetc(readP);
	
	//write  here
	
	}

}
