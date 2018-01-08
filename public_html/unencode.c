

void unencode(char *src, char *end, char *dest)
{
	while(src != end)
	{
		if(*src == '+')
		{
			*dest = ' ';
		}
		else if(*src == '%')
		{
			int code;
			if(sscanf(src+1, "%2x", &code) != 1)
			{
				code = '?';
			}
			*dest = code;
			src += 2;
		}
		else
		{
			*dest = *src;
		}
		src++;
		dest++;
	}
	*dest = '\0';
}
