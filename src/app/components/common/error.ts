// Jan 6 05:23:35 AM  ==> Cloning from https://github.com/dsofi/portfolio-BackEnd...
// Jan 6 05:23:40 AM  ==> Checking out commit e2c96753d194406156d494598890d4b8056d4cfd in branch main
// Jan 6 05:23:47 AM  #1 [internal] load .dockerignore
// Jan 6 05:23:47 AM  #1 transferring context: 2B done
// Jan 6 05:23:47 AM  #1 DONE 0.0s
// Jan 6 05:23:47 AM  
// Jan 6 05:23:47 AM  #2 [internal] load build definition from Dockerfile
// Jan 6 05:23:47 AM  #2 transferring dockerfile: 155B done
// Jan 6 05:23:47 AM  #2 DONE 0.0s
// Jan 6 05:23:47 AM  
// Jan 6 05:23:47 AM  #3 [internal] load metadata for docker.io/library/amazoncorretto:19-alpine-jdk
// Jan 6 05:23:47 AM  #3 ...
// Jan 6 05:23:47 AM  
// Jan 6 05:23:47 AM  #4 [auth] library/amazoncorretto:pull token for registry-1.docker.io
// Jan 6 05:23:47 AM  #4 DONE 0.0s
// Jan 6 05:23:47 AM  
// Jan 6 05:23:47 AM  #3 [internal] load metadata for docker.io/library/amazoncorretto:19-alpine-jdk
// Jan 6 05:23:48 AM  #3 DONE 1.0s
// Jan 6 05:23:48 AM  
// Jan 6 05:23:48 AM  #5 [1/2] FROM docker.io/library/amazoncorretto:19-alpine-jdk@sha256:46be4d85ae0f45ee7144fcb0d785907b960ee273f6e3d759b6e0c39bf03e5387
// Jan 6 05:23:48 AM  #5 resolve docker.io/library/amazoncorretto:19-alpine-jdk@sha256:46be4d85ae0f45ee7144fcb0d785907b960ee273f6e3d759b6e0c39bf03e5387 done
// Jan 6 05:23:48 AM  #5 DONE 0.0s
// Jan 6 05:23:48 AM  
// Jan 6 05:23:48 AM  #6 [internal] load build context
// Jan 6 05:23:50 AM  #6 transferring context: 49.25MB 2.0s done
// Jan 6 05:23:50 AM  #6 DONE 2.0s
// Jan 6 05:23:50 AM  
// Jan 6 05:23:50 AM  #5 [1/2] FROM docker.io/library/amazoncorretto:19-alpine-jdk@sha256:46be4d85ae0f45ee7144fcb0d785907b960ee273f6e3d759b6e0c39bf03e5387
// Jan 6 05:23:50 AM  #5 extracting sha256:ca7dd9ec2225f2385955c43b2379305acd51543c28cf1d4e94522b3d94cce3ce 0.5s done
// Jan 6 05:23:51 AM  #5 extracting sha256:b953496144a820faf3b5884ddfc542a98cc07f6a24635f26015e7c8d0ef19efe
// Jan 6 05:23:54 AM  #5 extracting sha256:b953496144a820faf3b5884ddfc542a98cc07f6a24635f26015e7c8d0ef19efe 3.1s done
// Jan 6 05:23:54 AM  #5 DONE 6.1s
// Jan 6 05:23:54 AM  
// Jan 6 05:23:54 AM  #7 [2/2] COPY target/segunda-0.0.1-SNAPSHOT.jar app.jar
// Jan 6 05:23:54 AM  #7 DONE 0.1s
// Jan 6 05:23:54 AM  
// Jan 6 05:23:54 AM  #8 exporting to oci image format
// Jan 6 05:23:54 AM  #8 exporting layers
// Jan 6 05:23:56 AM  #8 exporting layers 2.1s done
// Jan 6 05:23:56 AM  #8 exporting manifest sha256:16981ceac5e99b7824804ab5f09e018852012ef2c791862b895dec345800494e done
// Jan 6 05:23:56 AM  #8 exporting config sha256:c4a06dbdd0d75de87129281baa23f304b421215247cde13557fd1918fad58ba6 done
// Jan 6 05:24:04 AM  #8 DONE 9.9s
// Jan 6 05:24:04 AM  
// Jan 6 05:24:04 AM  #9 exporting cache
// Jan 6 05:24:10 AM  #9 DONE 6.4s
// Jan 6 05:24:11 AM  Pushing image to registry...
// Jan 6 05:24:17 AM  Upload succeeded
// Jan 6 05:24:17 AM  DONE
// Jan 6 05:24:55 AM  
// Jan 6 05:24:55 AM    .   ____          _            __ _ _
// Jan 6 05:24:55 AM   /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
// Jan 6 05:24:55 AM  ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
// Jan 6 05:24:55 AM   \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
// Jan 6 05:24:55 AM    '  |____| .__|_| |_|_| |_\__, | / / / /
// Jan 6 05:24:55 AM   =========|_|==============|___/=/_/_/_/
// Jan 6 05:24:55 AM   :: Spring Boot ::                (v3.0.0)
// Jan 6 05:24:55 AM  
// Jan 6 05:24:58 AM  2023-01-06T08:24:58.069Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : Starting SegundaApplication v0.0.1-SNAPSHOT using Java 19.0.1 with PID 1 (/app.jar started by root in /)
// Jan 6 05:24:58 AM  2023-01-06T08:24:58.163Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : No active profile set, falling back to 1 default profile: "default"
// Jan 6 05:25:25 AM  2023-01-06T08:25:25.765Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.
// Jan 6 05:25:29 AM  2023-01-06T08:25:29.077Z  INFO 1 --- [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 3012 ms. Found 8 JPA repository interfaces.
// Jan 6 05:25:55 AM  2023-01-06T08:25:55.961Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
// Jan 6 05:25:56 AM  2023-01-06T08:25:56.366Z  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
// Jan 6 05:25:56 AM  2023-01-06T08:25:56.367Z  INFO 1 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.1]
// Jan 6 05:26:00 AM  2023-01-06T08:26:00.995Z  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
// Jan 6 05:26:01 AM  2023-01-06T08:26:01.056Z  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 61123 ms
// Jan 6 05:26:14 AM  2023-01-06T08:26:14.358Z  INFO 1 --- [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]
// Jan 6 05:26:16 AM  2023-01-06T08:26:16.759Z  INFO 1 --- [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.1.5.Final


// Jan 6 05:26:22 AM  2023-01-06T08:26:22.857Z  WARN 1 --- [           main] org.hibernate.orm.deprecation            : HHH90000021: Encountered deprecated setting [javax.persistence.sharedCache.mode], use [jakarta.persistence.sharedCache.mode] instead


// Jan 6 05:26:26 AM  2023-01-06T08:26:26.756Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...
// Jan 6 05:26:33 AM  2023-01-06T08:26:33.657Z  INFO 1 --- [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection com.mysql.cj.jdbc.ConnectionImpl@38b972d7
// Jan 6 05:26:33 AM  2023-01-06T08:26:33.663Z  INFO 1 --- [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.
// Jan 6 05:26:34 AM  2023-01-06T08:26:34.159Z  INFO 1 --- [           main] SQL dialect                              : HHH000400: Using dialect: org.hibernate.dialect.MySQL8Dialect


// Jan 6 05:26:34 AM  2023-01-06T08:26:34.159Z  WARN 1 --- [           main] org.hibernate.orm.deprecation            : HHH90000026: MySQL8Dialect has been deprecated; use org.hibernate.dialect.MySQLDialect instead


// Jan 6 05:27:50 AM  2023-01-06T08:27:50.353Z  INFO 1 --- [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000490: Using JtaPlatform implementation: [org.hibernate.engine.transaction.jta.platform.internal.NoJtaPlatform]
// Jan 6 05:27:50 AM  2023-01-06T08:27:50.368Z  INFO 1 --- [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'


// Jan 6 05:28:18 AM  2023-01-06T08:28:18.063Z  WARN 1 --- [           main] JpaBaseConfiguration$JpaWebConfiguration : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning


// Jan 6 05:28:29 AM  2023-01-06T08:28:29.765Z  INFO 1 --- [           main] o.s.s.web.DefaultSecurityFilterChain     : Will secure any request with [org.springframework.security.web.session.DisableEncodeUrlFilter@682e422c, org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter@5bb8e6fc, org.springframework.security.web.context.SecurityContextHolderFilter@2b999ee8, org.springframework.security.web.header.HeaderWriterFilter@6750e381, org.springframework.web.filter.CorsFilter@2726a511, org.springframework.security.web.authentication.logout.LogoutFilter@32ae8f27, com.probando.segunda.security.JWTAuthorizationFilter@b7838a9, com.probando.segunda.security.JWTAuthenticationFilter@72c9ebfa, org.springframework.security.web.savedrequest.RequestCacheAwareFilter@29bbc391, org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter@530ee28b, org.springframework.security.web.authentication.AnonymousAuthenticationFilter@686cf8ad, org.springframework.security.web.session.SessionManagementFilter@b022551, org.springframework.security.web.access.ExceptionTranslationFilter@353c6da1, org.springframework.security.web.access.intercept.AuthorizationFilter@d87d449]
// Jan 6 05:28:36 AM  2023-01-06T08:28:36.858Z  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
// Jan 6 05:28:37 AM  2023-01-06T08:28:37.462Z  INFO 1 --- [           main] c.probando.segunda.SegundaApplication    : Started SegundaApplication in 234.791 seconds (process running for 252.514)
// Jan 6 05:29:52 AM  2023-01-06T08:29:52.978Z  INFO 1 --- [ionShutdownHook] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
// Jan 6 05:29:53 AM  2023-01-06T08:29:53.062Z  INFO 1 --- [ionShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown initiated...
// Jan 6 05:29:54 AM  2023-01-06T08:29:54.680Z  INFO 1 --- [ionShutdownHook] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Shutdown completed.