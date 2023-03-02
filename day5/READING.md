# JAVASCRIPT CORS AND RECAP

## JAVASCRIPT CORS

CORS stands for **Cross-Origin Resource Sharing**, which is a security mechanism implemented in web browsers to prevent web pages 
from making requests to a different domain than the one that served the original web page. CORS is a security measure that is 
in place to prevent malicious websites from stealing user data or performing unauthorized actions on a user's behalf.

To understand how CORS works, it's important to know that web browsers enforce the Same-Origin Policy, which restricts web pages 
from making requests to a different domain than the one that served the original web page. This means that if your web page is 
hosted on example.com, it cannot make requests to api.example.net.

To enable cross-origin resource sharing, the server hosting the resource must include the appropriate HTTP headers in the response. 
These headers tell the browser that the resource is allowed to be shared with other domains. The headers that need to be included are:

- **Access-Control-Allow-Origin**: This header specifies which domains are allowed to access the resource. For example, if you want to allow 
all domains to access the resource, you would set this header to "*".
- **Access-Control-Allow-Methods**: This header specifies which HTTP methods are allowed to be used when accessing the resource. 
For example, if you only want to allow GET requests, you would set this header to "GET".
- **Access-Control-Allow-Headers**: This header specifies which headers are allowed to be included in the request. For example, 
if you want to allow the "Authorization" header, you would set this header to "Authorization".

To prevent CORS issues, you should **ensure that the server hosting the resource** includes the appropriate CORS headers in the response. 
Additionally, you should avoid making cross-origin requests from your web page unless it is absolutely necessary. If you do need to make 
a cross-origin request, you can use a proxy on your server to forward the request to the other domain, which will allow you to avoid CORS issues.

## JAVA SERVER CORS CODE EXAMPLE

```java 
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

public class CorsFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Do nothing
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;

        // Set the allowed origins
        response.setHeader("Access-Control-Allow-Origin", "*");

        // Set the allowed HTTP methods
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

        // Set the allowed HTTP headers
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        // Allow cookies
        response.setHeader("Access-Control-Allow-Credentials", "true");

        chain.doFilter(req, res);
    }

    @Override
    public void destroy() {
        // Do nothing
    }

}

```

To register the CorsFilter in your application you need to add the following code to your Application Config file:

```java
import java.util.Collections;
import javax.servlet.FilterRegistration;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@ApplicationPath("/")
public class MyApplication extends Application implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Register the CorsFilter
        FilterRegistration.Dynamic corsFilter = filterConfig.getServletContext().addFilter("CorsFilter", CorsFilter.class);
        corsFilter.setInitParameters(Collections.singletonMap("cors.support.credentials", "true"));
        corsFilter.addMappingForUrlPatterns(null, false, "/*");
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {
        // Do nothing - this method is required by the Filter interface
    }

    @Override
    public void destroy() {
        // Do nothing - this method is required by the Filter interface
    }
}

```

In this example, we implement the Filter interface in the MyApplication class and register the CorsFilter in the init method using the FilterRegistration API. 
We also set the cors.support.credentials parameter to "true" to allow credentials in cross-origin requests.

With these changes, the MyApplication class now handles both the initialization of the JAX-RS application and the registration of the CORS filter.

## CORS CLIENT

**Do I need to add CORS headers on the client side ?**

No, you don't need to add CORS headers on the client side to avoid CORS issues. CORS headers need to be added on the server side to indicate to the browser that the 
server allows cross-origin requests from specific domains.

When the browser sends a cross-origin request, it first sends a preflight request (an HTTP OPTIONS request) to the server to determine whether the server allows the request. 
The server responds with the appropriate CORS headers to indicate whether the request is allowed or not. If the server allows the request, the browser then sends the actual 
request with the appropriate CORS headers.

So, as long as the server has the appropriate CORS headers set, the client should be able to make cross-origin requests without any issues. The client does not need 
to add any specific headers to the requests it sends.

However, the client should be configured to send credentials (such as cookies) in cross-origin requests if necessary. To do this, you can set the withCredentials property 
of the XMLHttpRequest object to true in JavaScript. This property allows cookies to be sent in cross-origin requests if the server allows it.

Example:

```javascript
fetch('https://example.com/api/data', {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Network response was not ok');
  }
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
    
```

In this example, we're making a GET request to the https://example.com/api/data URL with the fetch API. We're setting the credentials option to include to allow cookies 
to be sent with the request. We're also setting the Content-Type header to application/json.

Once the response is received, we're checking if the response is OK (status code 200) and returning the response as JSON. 
If there's an error, we're throwing an error and catching it with the catch block.

You can modify this example to suit your specific use case, such as changing the request method or adding more headers.
