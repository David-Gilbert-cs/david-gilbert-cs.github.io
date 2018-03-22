
room : room.o unencode.o
	gcc -o room.cgi room.o unencode.o

room.o : room.c
	gcc -c room.c

unencode.o : unencode.c unencode.h
	gcc -c unencode.c
