#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include "unencode.h"

void main(int argc, char *argv[])
{
	int n = atoi(getenv("CONTENT_LENGTH"));
	char web_input[n+1];
	char player_input[n+1];
	int player_manna, player_gold;
	char player_cmd[10];
	
	int room_manna, room_gold, room_player;
	char room_resources[50];	
	FILE *resources_read = fopen("resources.csv", "rt");
	
	fgets(room_resources, 50, resources_read);
	sscanf(room_resources,"%d,%d,%d", &room_manna, &room_gold, &room_player);
	
	fgets(web_input, n+1, stdin);
	unencode(web_input, web_input+n, player_input);
	
	sscanf(player_input, "inventory=%d,%d&command=%s", &player_manna, &player_gold, player_cmd);
	
	if(player_manna == 0)
	{
		printf("Content-type: text/html\n\n");
		printf("<html>");
		printf("<head><link href=\"https://www.cs.mcgill.ca/~dgilbe9/styles/style.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker|Press+Start+2P\" rel=\"stylesheet\"><title>Assignment 4</title></head>");
		printf("<body>");
		printf("<h1>GAME OVER</h1>");
		printf("<center><img src=\"https://www.cs.mcgill.ca/~dgilbe9/images/thinking.jpg\" alt=\"thinking\"></center>");
		printf("</body>");
		printf("</html>");
	}
	else
	{
		if( strncmp(player_cmd, "EX", 2)==0 || strncmp(player_cmd, "Ex", 2)==0 || strncmp(player_cmd, "eX", 2)==0 || strncmp(player_cmd, "ex", 2)==0 ) 
		{
			room_manna = room_manna + player_manna;
			room_gold = room_gold + player_gold;
			room_player = 0;
			player_manna = 0;
			player_gold = 0;
			FILE *resources_write = fopen("resources.csv", "wt");
			sprintf(room_resources, "%d,%d,%d", room_manna, room_gold, room_player);
			fputs(room_resources, resources_write);
			fclose(resources_write);
			
			printf("Content-type: text/html\n\n");
			printf("<html>");
			printf("<head><link href=\"https://www.cs.mcgill.ca/~dgilbe9/styles/style.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker|Press+Start+2P\" rel=\"stylesheet\"><title>Assignment 4</title></head>");
			printf("<body>");
			printf("<h1>See You Next Time</h1>");
			printf("<center><img src=\"https://www.cs.mcgill.ca/~dgilbe9/images/bye.png\" alt=\"bye\"></center>");
			printf("</body>");
			printf("</html>");
		}
		else if( strncmp(player_cmd, "RE", 2)==0 || strncmp(player_cmd, "Re", 2)==0 || strncmp(player_cmd, "rE", 2)==0 || strncmp(player_cmd, "re", 2)==0 ) 
		{
			printf("Content-type: text/html\n\n");
			printf("<html>");
			printf("<head><link href=\"https://www.cs.mcgill.ca/~dgilbe9/styles/style.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"https://fonts.googleapis.com/css?family=Permanent+Marker|Press+Start+2P\" rel=\"stylesheet\"><title>Assignment 4</title></head>");
			printf("<body>");
			printf("<h1>Welcome!</h1>");
			printf("<center><img src=\"https://www.cs.mcgill.ca/~dgilbe9/images/welcome.jpg\" alt=\"welcome\"></center>");
			printf("<form name=\"input\" action=\"http://www.cs.mcgill.ca/~dgilbe9/cgi-bin/room.cgi\" method=\"post\">");
			printf("<p>Please type a command (DROP n, PLAY, EXIT, REFRESH) </p>");
			printf("<input type=\"hidden\" name=\"inventory\" value=\"%d,%d\">", player_manna, player_gold);
			printf("<input type=\"text\" name=\"command\"> </br> </br>");
			printf("<input type=\"submit\" value=\"Let's GO\">");
			printf("</form>");
			printf("</body>");
			printf("</html>");
		}
	}
	
	fclose(resources_read);
}
